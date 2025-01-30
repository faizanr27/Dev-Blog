import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPost';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CreatePost from './pages/CreatePost';
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen dark:bg-[#111827] text-white">
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/write' element={<CreatePost/>}/>
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
