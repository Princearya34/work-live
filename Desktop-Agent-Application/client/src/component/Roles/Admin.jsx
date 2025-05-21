import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeStatusBox from '../Utils/EmployeeStatusBox';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTime, setActiveTime] = useState(0);
  const [inactiveTime, setInactiveTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [developData, setDevelopData] = useState([]);
  const [inputTime, setInputTime] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [status, setStatus] = useState(false);
  const itemsPerPage = 10; // Define this as a constant

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/')
      .then(response => {
        setDevelopData(response.data);
        calculateTotalDuration(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setSubmissionStatus('Error fetching data.');
      });

    axios.get('http://127.0.0.1:8000/timer')
      .then(response => {
        setStatus(response.data.timerRunning);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setSubmissionStatus('Error fetching data.');
      });
  }, [status, developData]);

  const calculateTotalDuration = (data) => {
    let active = 0;
    let inactive = 0;

    data.forEach((item) => {
      const durationParts = item.duration.split(':');
      const hours = parseInt(durationParts[0], 10);
      const minutes = parseInt(durationParts[1], 10);
      const secondsParts = durationParts[2].split('.');
      const seconds = parseInt(secondsParts[0], 10);

      const durationInSeconds = hours * 3600 + minutes * 60 + seconds;
      if (item.app_name === 'Unknown' || item.app_name === 'Start' || item.app_name === 'Search') {
        inactive += durationInSeconds;
      } else if (item.app_name === "Inactivity Warning") {
        inactive += 30;
        active -= 30;
      } else {
        active += durationInSeconds;
      }
    });
    setInactiveTime(inactive);
    setActiveTime(active);
    setTotalTime(active + inactive);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Calculate pagination variables
  const totalItems = developData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = developData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page changes
  const paginate = (pageNumber) => {
    // Make sure we don't go beyond valid page ranges
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // Navigate to previous and next pages
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const handleScreenshotClick = () => {
    axios.post('http://127.0.0.1:8000/screenshot-now')
      .then(response => {
        setSubmissionStatus('Screenshot taken and uploaded successfully!');
        console.log('Screenshot response:', response.data);
      })
      .catch(error => {
        console.error('Error taking screenshot:', error);
        setSubmissionStatus('Error taking screenshot.');
      });
  };

  // Generate page numbers to display
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Maximum number of page buttons to show
    
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;
    
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`px-3 py-1 rounded-md ${
            currentPage === i
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          } transition duration-150`}
        >
          {i}
        </button>
      );
    }
    
    return pageNumbers;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Admin Dashboard
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Time Tracking Section */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:border-indigo-500 transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Time Tracking</h2>
            <div className="flex flex-col items-center py-6 px-4 bg-gray-900 rounded-lg shadow-inner mb-4">
              <h3 className="text-lg font-medium text-gray-400 mb-2">Total Time Today</h3>
              <p className="text-4xl font-bold text-white mb-4">{formatTime(totalTime)}</p>
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-3 bg-green-900/40 rounded-lg">
                  <span className="text-sm text-green-400">Active</span>
                  <span className="text-lg font-semibold text-green-300">{formatTime(activeTime)}</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-red-900/40 rounded-lg">
                  <span className="text-sm text-red-400">Inactive</span>
                  <span className="text-lg font-semibold text-red-300">{formatTime(inactiveTime)}</span>
                </div>
              </div>
            </div>
            
            {/* Employee Status */}
            <div className="p-4 bg-gray-900 rounded-lg shadow-inner">
              <h3 className="text-lg font-medium text-center text-gray-400 mb-3">Employee Status</h3>
              <div className="flex justify-center">
                <EmployeeStatusBox isActive={status} />
              </div>
            </div>
          </div>
          
          {/* Tasks & Screenshot Section */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:border-indigo-500 transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Quick Actions</h2>
            
            {/* Tasks Button */}
            <div className="flex flex-col items-center p-6 mb-4 bg-gray-900 rounded-lg shadow-inner">
              <h3 className="text-xl font-medium text-center text-gray-300 mb-6">Task Management</h3>
              <a 
                href="https://kanban-task-manager-yg8i-git-main-harshnishads-projects.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
              >
                View Tasks
              </a>
            </div>
            
            {/* Screenshot Button */}
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-inner">
              <h3 className="text-xl font-medium text-center text-gray-300 mb-4">Manual Screenshot</h3>
              <button 
                onClick={handleScreenshotClick}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
              >
                Take Screenshot
              </button>
              {submissionStatus && 
                <p className="mt-3 text-sm font-medium text-center text-indigo-300">
                  {submissionStatus}
                </p>
              }
            </div>
          </div>
        </div>
        
        {/* Activity Table */}
        <div className="mt-8 bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:border-indigo-500 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Activity Timeline</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-300 uppercase bg-gray-900">
                <tr>
                  <th className="px-6 py-3 rounded-tl-lg">Start Time</th>
                  <th className="px-6 py-3">Duration</th>
                  <th className="px-6 py-3 rounded-tr-lg">Application</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  item.app_name !== "" ? (
                    <tr key={index} className={`border-b border-gray-700 ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'} hover:bg-indigo-900/20 transition duration-150`}>
                      <td className="px-6 py-4">{item.start_time}</td>
                      <td className="px-6 py-4">{item.duration}</td>
                      <td className="px-6 py-4">
                        <span className={`py-1 px-3 rounded-full text-xs font-medium ${
                          item.app_name === "Inactivity Warning" ? 'bg-red-900/60 text-red-200' :
                          (item.app_name === 'Unknown' || item.app_name === 'Start' || item.app_name === 'Search') ? 'bg-yellow-900/60 text-yellow-200' : 'bg-green-900/60 text-green-200'
                        }`}>
                          {item.app_name}
                        </span>
                      </td>
                    </tr>
                  ) : null
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Enhanced Pagination */}
          {totalPages > 0 && (
            <div className="flex justify-center mt-6">
              <nav className="flex items-center space-x-2">
                {/* First page button */}
                <button
                  onClick={() => paginate(1)}
                  disabled={currentPage === 1}
                  className={`px-2 py-1 rounded-md ${
                    currentPage === 1
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  } transition duration-150`}
                >
                  &laquo;
                </button>
                
                {/* Previous page button */}
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className={`px-2 py-1 rounded-md ${
                    currentPage === 1
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  } transition duration-150`}
                >
                  &lsaquo;
                </button>
                
                {/* Page numbers */}
                {renderPageNumbers()}
                
                {/* Next page button */}
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-2 py-1 rounded-md ${
                    currentPage === totalPages
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  } transition duration-150`}
                >
                  &rsaquo;
                </button>
                
                {/* Last page button */}
                <button
                  onClick={() => paginate(totalPages)}
                  disabled={currentPage === totalPages}
                  className={`px-2 py-1 rounded-md ${
                    currentPage === totalPages
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  } transition duration-150`}
                >
                  &raquo;
                </button>
              </nav>
            </div>
          )}
          
          {/* Page info */}
          {totalItems > 0 && (
            <div className="text-center text-sm text-gray-400 mt-2">
              Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalItems)} of {totalItems} entries
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;