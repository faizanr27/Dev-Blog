import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { BiChevronDown, BiSun } from "react-icons/bi";
import { PiMoonStars } from "react-icons/pi";
import React from 'react';

interface NavProps {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
}

function Navbar({ setDarkMode, darkMode }: NavProps) {
  const { name, isAuthenticated, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Extract the first letter of the username
  const firstLetter = name ? name.charAt(0).toUpperCase() : '';

  return (
    <nav className="fixed top-0 w-full dark:bg-[#111827]/80 bg-[#fff]/50 backdrop-blur-sm dark:border-gray-800 z-50 border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold dark:text-[#fff] text-[#2D5FB2] flex flex-row items-center gap-2 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D5FB2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-pen">
              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>
            </svg>
            DevBlog
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className="border p-[0.4rem] rounded-md flex flex-row bg-slate-50/80">
              {darkMode ? <PiMoonStars fill='#2D5FB2' /> : <BiSun fill='#2D5FB2' />}
            </button>
            {isAuthenticated ? (
              <div className="relative">
                <button onClick={toggleDropdown} className="flex items-center gap-2 text-gray-600 dark:text-white">
                  <div className="w-8 h-8 rounded-full dark:bg-[#21314b] bg-[#2D5FB2] text-white flex items-center justify-center text-lg">
                    {firstLetter}
                  </div>
                  <BiChevronDown />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
                    <div className="px-4 py-2 text-gray-700 dark:text-gray-300">{name}</div>
                    <button
                      onClick={toggleDarkMode}
                      className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Toggle Dark Mode
                    </button>
                    <button className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Link to="/write">Write</Link>
                    </button>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/signin" className="btn dark:text-white text-[#2D5FB2] flex flex-row gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
