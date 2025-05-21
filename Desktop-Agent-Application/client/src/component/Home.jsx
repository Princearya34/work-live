import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './app.css';

const Home = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  // Mouse position for floating animation effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    // Simulate API call with small delay for UX
    setTimeout(() => {
      onLogin(username, password);
      
      if (username === 'admin' && password === '0000') {
        setLoginSuccess(true);
        setTimeout(() => navigate('/admin'), 1000);
      } else if (username === 'client' && password === '1111') {
        setLoginSuccess(true);
        setTimeout(() => navigate('/client'), 1000);
      } else {
        setIsLoading(false);
        // Show error message or animation here
      }
    }, 800);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-6 py-12 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 bg-animate">
      {/* Animated background elements */}
      <div 
        className="absolute top-0 left-0 w-64 h-64 rounded-full bg-indigo-600 opacity-10 blur-xl"
        style={{ 
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.5s ease-out' 
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-600 opacity-10 blur-xl"
        style={{ 
          transform: `translate(-${mousePosition.x * 20}px, -${mousePosition.y * 20}px)`,
          transition: 'transform 0.7s ease-out' 
        }}
      />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-sm z-10 animate-fadeIn">
        {/* Logo with animation */}
        <div className="mx-auto w-20 h-20 animate-pulse-slow">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
        </div>
        
        <h2 className="mt-6 text-center text-3xl font-extrabold tracking-tight text-white">
          Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Live</span>
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400 animate-fadeIn">
          Connect. Collaborate. Create.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm z-10">
        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-gray-700 border-opacity-50 animate-slideUp">
          <h3 className="text-xl font-semibold mb-6 text-white text-center">Sign in to your account</h3>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-300"
              >
                Username
              </label>
              <div className="mt-2 group">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  className="block w-full rounded-md border-0 py-2 px-3 bg-gray-700 bg-opacity-50 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none transition-all duration-300 sm:text-sm sm:leading-6"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-300"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-2 px-3 bg-gray-700 bg-opacity-50 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none transition-all duration-300 sm:text-sm sm:leading-6"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-end mt-2">
                <a href="#" className="text-xs text-indigo-300 hover:text-indigo-200 transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading || loginSuccess}
                className={`flex w-full justify-center items-center rounded-md px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm transition-all duration-300 ${
                  loginSuccess 
                    ? 'bg-green-600 hover:bg-green-500' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500'
                } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform hover:-translate-y-0.5 active:translate-y-0`}
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {loginSuccess ? 'Success!' : isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>
          
          <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};



export default Home;