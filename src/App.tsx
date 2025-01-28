import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPost';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CreatePost from './pages/CreatePost';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen dark:bg-[#111827] text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/write' element={<CreatePost/>}/>
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;