import React, { useState, useEffect } from 'react';
import NetworkConnectionBox from '../Network/NetworkConnectionBox';
import './App.css';

const NetworkShow = () => {
  const [isConnected, setIsConnected] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsConnected(true);
    const handleOffline = () => setIsConnected(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="flex items-center justify-center p-2">
      <div className="w-full rounded-xl bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-lg overflow-hidden">
        <div className="p-4 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-purple-500 rounded-full opacity-20 blur-lg"></div>
          
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
                <div className="text-lg font-semibold">Internet Connection</div>
              </div>
              
              <NetworkConnectionBox isConnected={isConnected} />
            </div>
            
            <div className="bg-black bg-opacity-30 rounded-lg p-3 mt-2">
              <div className="text-sm text-gray-300">
                Status: {isConnected ? 
                  <span className="text-green-400">Connected</span> : 
                  <span className="text-red-400">Disconnected</span>}
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-400">Signal Strength</div>
                <div className="flex space-x-1">
                  {isConnected ? (
                    <>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <div className="h-3 w-2 rounded-full bg-green-500"></div>
                      <div className="h-4 w-2 rounded-full bg-green-500"></div>
                      <div className="h-5 w-2 rounded-full bg-green-500"></div>
                    </>
                  ) : (
                    <>
                      <div className="h-2 w-2 rounded-full bg-gray-500"></div>
                      <div className="h-3 w-2 rounded-full bg-gray-500"></div>
                      <div className="h-4 w-2 rounded-full bg-gray-500"></div>
                      <div className="h-5 w-2 rounded-full bg-gray-500"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkShow;