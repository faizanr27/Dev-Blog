import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';

function SignUp() {
  const navigate = useNavigate();
  const {  signup, loginWithGoogle, loginWithGithub } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    try {
      setError(null);
      console.log({ name, email, password });
      await signup(email, password, name);
      console.log('Navigating to home...');
      navigate('/');
    } catch (err) {
      setError('Failed to create an account. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold dark:text-white text-black/80">
            Create an account
          </h2>
          <p className="mt-2 text-black/80 dark:text-gray-400">
            Join our community of writers and readers
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1 text-black/80 dark:text-gray-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 dark:bg-white/20 bg-slate-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5FB2] transition duration-200 text-black/80 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-black/80 dark:text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 dark:bg-white/20 bg-slate-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5FB2] transition duration-200 text-black/80 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1 text-black/80 dark:text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 dark:bg-white/20 bg-slate-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5FB2] transition duration-200 text-black/80 dark:text-white"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="w-full btn btn-primary">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-black/80 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/signin" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="border-b w-1/3"></span>
                  <p className="text-black text-sm text-center">or</p>
                  <span className="border-b w-1/3"></span>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                  <button
                    onClick={loginWithGoogle}
                    className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition duration-200"
                  >
                    <FaGoogle className="mr-2" />
                    Sign in with Google
                  </button>
                  <button
                    onClick={loginWithGithub}
                    className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-black hover:bg-gray-800 text-white font-medium transition duration-200"
                  >
                    <FaGithub className="mr-2" />
                    Sign in with GitHub
                  </button>
                </div>
      </div>
    </div>
  );
}

export default SignUp;
