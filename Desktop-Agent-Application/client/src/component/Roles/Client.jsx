import React, { useState, useEffect } from "react";
import axios from "axios";
import TimeDisplay from "../Utils/TimeDisplay";
import NetworkShow from "../Utils/Network/NetworkShow";
import { TaskManagement } from "../Utils/TaskManagement";

const Client = () => {
    const [timerRunning, setTimerRunning] = useState(false);
    const [activeTime, setActiveTime] = useState(0);
    const [inactiveTime, setInactiveTime] = useState(0);
    const [developData, setDevelopData] = useState([]);
    const [batteryStatus, setBatteryStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get("http://127.0.0.1:8000/");
                const data = response.data;
                setDevelopData(data);
                calculateTotalDuration(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        };

        fetchData();

        // Set up polling interval (every 30 seconds)
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, []);

    const calculateTotalDuration = (data) => {
        let active = 0;
        let inactive = 0;

        data.forEach((item) => {
            const durationParts = item.duration.split(":");
            const hours = parseInt(durationParts[0], 10);
            const minutes = parseInt(durationParts[1], 10);
            const secondsParts = durationParts[2].split(".");
            const seconds = parseInt(secondsParts[0], 10);

            const durationInSeconds = hours * 3600 + minutes * 60 + seconds;
            if (
                item.app_name === "Unknown" ||
                item.app_name === "Start" ||
                item.app_name === "Search"
            ) {
                inactive += durationInSeconds;
            } else if (item.app_name === "Inactivity Warning") {
                inactive += 30;
            } else {
                active += durationInSeconds;
            }
        });
        setInactiveTime(inactive);
        setActiveTime(active);
    };

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    const handleTimerToggle = () => {
        const newTimerState = !timerRunning;
        setTimerRunning(newTimerState);

        axios
            .post("http://127.0.0.1:8000/timer", { timerRunning: newTimerState })
            .then((response) => {
                console.log("Timer state updated:", response.data);
            })
            .catch((error) => {
                console.error("Error updating timer state:", error);
            });
    };

    // Calculate active time percentage for the progress bar
    const totalTime = activeTime + inactiveTime;
    const activePercentage = totalTime > 0 ? (activeTime / totalTime) * 100 : 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white">
            {/* Header */}
            <header className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                            <path d="M32 4L59.7128 48H4.28719L32 4Z" fill="url(#paint0_linear)"/>
                            <path d="M32 64C45.2548 64 56 53.2548 56 40C56 26.7452 45.2548 16 32 16C18.7452 16 8 26.7452 8 40C8 53.2548 18.7452 64 32 64Z" fill="url(#paint1_linear)"/>
                            <defs>
                                <linearGradient id="paint0_linear" x1="4.28719" y1="48" x2="59.7128" y2="48" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6E72FC"/>
                                    <stop offset="1" stopColor="#AD1DEB"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="8" y1="40" x2="56" y2="40" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6E72FC"/>
                                    <stop offset="1" stopColor="#AD1DEB"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <h1 className="text-2xl font-bold">Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Live</span></h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <TimeDisplay />
                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-sm transition duration-300 flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Profile</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-6 py-8">
                {/* Main Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column - Time Tracking */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-6 mb-8">
                            <h2 className="text-xl font-semibold mb-6 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Time Tracking
                            </h2>

                            {isLoading ? (
                                <div className="flex justify-center items-center h-64">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {/* Progress Bar */}
                                    <div className="mb-8">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-300">Productivity</span>
                                            <span className="text-sm font-medium text-indigo-300">{activePercentage.toFixed(1)}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                                            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full" style={{ width: `${activePercentage}%` }}></div>
                                        </div>
                                    </div>

                                    {/* Time Stats Cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Active Time */}
                                        <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-xl shadow-lg p-6 relative overflow-hidden">
                                            <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-indigo-700 bg-opacity-50 blur-xl"></div>
                                            <h3 className="text-lg font-medium text-indigo-200 mb-1">Active Time</h3>
                                            <div className="text-3xl font-bold tracking-tight mt-2">{formatTime(activeTime)}</div>
                                            <div className="mt-4 flex items-center">
                                                <span className="px-2 py-1 text-xs font-medium bg-indigo-500 bg-opacity-25 text-indigo-200 rounded-md">
                                                    {totalTime > 0 ? Math.round(activeTime / totalTime * 100) : 0}% of total
                                                </span>
                                            </div>
                                        </div>

                                        {/* Inactive Time */}
                                        <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden">
                                            <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gray-600 bg-opacity-50 blur-xl"></div>
                                            <h3 className="text-lg font-medium text-gray-300 mb-1">Inactive Time</h3>
                                            <div className="text-3xl font-bold tracking-tight mt-2">{formatTime(inactiveTime)}</div>
                                            <div className="mt-4 flex items-center">
                                                <span className="px-2 py-1 text-xs font-medium bg-gray-600 bg-opacity-25 text-gray-300 rounded-md">
                                                    {totalTime > 0 ? Math.round(inactiveTime / totalTime * 100) : 0}% of total
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Go Live Button */}
                                    <div className="flex justify-center mt-8">
                                        {!timerRunning && (
                                            <button
                                                onClick={handleTimerToggle}
                                                className="group relative px-8 py-3 overflow-hidden rounded-full bg-indigo-600 text-lg font-bold text-white shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    Go Live
                                                </div>
                                            </button>
                                        )}
                                        {timerRunning && (
                                            <div className="px-6 py-3 bg-green-600 rounded-full text-white font-bold flex items-center">
                                                <span className="relative flex h-3 w-3 mr-3">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                                </span>
                                                Live Now
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-6">
                            <h2 className="text-xl font-semibold mb-6 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Recent Activity
                            </h2>
                            
                            <div className="space-y-4">
                                {developData.slice(0, 5).map((item, index) => (
                                    <div key={index} className="flex items-center p-3 bg-gray-700 bg-opacity-40 rounded-lg">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center">
                                            <span className="text-xl font-bold">{item.app_name[0]}</span>
                                        </div>
                                        <div className="ml-4 flex-grow">
                                            <div className="font-medium">{item.app_name}</div>
                                            <div className="text-sm text-gray-400">{item.duration}</div>
                                        </div>
                                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            item.app_name === "Unknown" || item.app_name === "Start" || item.app_name === "Search" || item.app_name === "Inactivity Warning"
                                                ? "bg-gray-500 bg-opacity-30 text-gray-300"
                                                : "bg-indigo-500 bg-opacity-30 text-indigo-200"
                                        }`}>
                                            {item.app_name === "Unknown" || item.app_name === "Start" || item.app_name === "Search" || item.app_name === "Inactivity Warning"
                                                ? "Inactive"
                                                : "Active"}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Widgets */}
                    <div className="space-y-8">
                        {/* Network Widget */}
                        <div className="bg-gray-800 bg-opacity-50 wbackdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                </svg>
                                Network Status
                            </h2>
                            <div className="bg-gray-700 bg-opacity-50 rounded-xl p-4">
                                <NetworkShow />
                            </div>
                        </div>

                        {/* Task Management Widget */}
                        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M19 13l-4 4m0 0l-4-4m4 4V7" />
                                </svg>
                                Task Management
                            </h2>
                            <div className="bg-gray-700 bg-opacity-50 rounded-xl p-4">
                                <TaskManagement />
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                Quick Stats
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-indigo-900 bg-opacity-40 p-4 rounded-xl">
                                    <div className="text-sm text-gray-300">Today</div>
                                    <div className="text-xl font-bold mt-1">{formatTime(activeTime)}</div>
                                </div>
                                <div className="bg-purple-900 bg-opacity-40 p-4 rounded-xl">
                                    <div className="text-sm text-gray-300">Efficiency</div>
                                    <div className="text-xl font-bold mt-1">
                                        {totalTime > 0 ? Math.round(activeTime / totalTime * 100) : 0}%
                                    </div>
                                </div>
                                <div className="bg-blue-900 bg-opacity-40 p-4 rounded-xl">
                                    <div className="text-sm text-gray-300">Apps Used</div>
                                    <div className="text-xl font-bold mt-1">
                                        {new Set(developData.map(item => item.app_name)).size}
                                    </div>
                                </div>
                                <div className="bg-gray-700 bg-opacity-40 p-4 rounded-xl">
                                    <div className="text-sm text-gray-300">Status</div>
                                    <div className="text-xl font-bold mt-1 flex items-center">
                                        {timerRunning ? (
                                            <>
                                                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                                                Active
                                            </>
                                        ) : (
                                            <>
                                                <span className="h-2 w-2 rounded-full bg-gray-500 mr-2"></span>
                                                Offline
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;