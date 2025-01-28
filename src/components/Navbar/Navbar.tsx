import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { PiMoonStars } from "react-icons/pi";
import { BiSun } from "react-icons/bi";
import React from 'react'

function Navbar() {
  const { name, isAuthenticated, logout } = useAuth();
  const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

  return (
    <nav className="fixed top-0 w-full dark:bg-[#111827]/80 bg-[#fff]/50 backdrop-blur-sm  dark:border-gray-800 z-50 border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <Link to="/" className="text-2xl font-bold dark:text-[#fff] text-[#2D5FB2] flex flex-row items-center gap-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D5FB2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
          DevBlog</Link>
          <div className="flex items-center gap-4">
          <button onClick={()=> darkModeHandler()} className='border p-[0.4rem] rounded-md flex flex-row bg-slate-50/80'>
                {

                    dark && <PiMoonStars fill='#2D5FB2' />
                }
                {
                    !dark &&  <BiSun fill='#2D5FB2' />
                }

          </button>
            <Link to="/" className="btn text-[#2D5FB2] flex flex-row gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            Home</Link>
            {isAuthenticated ? (
              <>
                <Link to="/write" className="btn btn-primary">Write</Link>
                <button
                onClick={logout}
                  className="btn text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white"
                >
                  Sign Out
                </button>
                <span className="text-sm font-medium hidden sm:block">
                  {name}
                </span>
              </>
            ) : (
              <>
                <Link to="/signin" className="btn dark:text-white text-[#2D5FB2] flex flex-row gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Sign In</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;