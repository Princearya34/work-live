import React, { useState, useEffect } from 'react';

const TimezoneManagement = () => {
  const [time, setTime] = useState(new Date()); // Initialize with current time
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  // Function to fetch the time for India timezone (Asia/Kolkata)
  const fetchTimeForIndia = async () => {
    try {
      const response = await fetch(
        'https://worldtimeapi.org/api/timezone/Asia/Kolkata'
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const localTime = new Date(data.datetime);
      setTime(localTime);
      setDate(localTime.toLocaleDateString());
    } catch (err) {
      console.error('Error fetching time data:', err);
      setError(`Error fetching time data: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchTimeForIndia(); // Fetch initial time for India

    // Update time every second (local time)
    const intervalId = setInterval(() => {
      setTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // If there's an error, display it
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">Local Time (India)</h1>
        <p className="text-xl text-gray-600 mt-2">{date}</p>
        <p className="text-xl text-gray-600 mt-2">{time?.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default TimezoneManagement;
