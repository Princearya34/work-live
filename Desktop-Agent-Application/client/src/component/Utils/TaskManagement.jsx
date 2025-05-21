import React from 'react';

export const TaskManagement = () => {
  return (
    <div className="my-6 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 shadow-xl">
      <div className="p-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
        
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
          Manage Your Tasks
        </h1>
        
        {/* Card content */}
        <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg backdrop-filter backdrop-blur-sm">
          <p className="text-gray-300 text-center mb-4">
            Track your projects, deadlines, and collaborate with your team in real-time
          </p>
          
          {/* Task statistics */}
         
          
          {/* Action button */}
          <div className="flex justify-center mt-2">
            <a 
              href="https://kanban-task-manager-yg8i-git-main-harshnishads-projects.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer" 
              className="group"
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg flex items-center justify-center space-x-2 transform transition-all duration-300 hover:shadow-blue-500/30 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M15 11v5M12 11v5M9 11v5" />
                </svg>
                <span>Open Task Board</span>
                <span className="absolute right-0 w-0 h-full bg-white opacity-30 transform -skew-x-12 group-hover:animate-shine"></span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};