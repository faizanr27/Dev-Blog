import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
  const { signup } = useAuth();
  const navigate = useNavigate();

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
        <p className="border"></p>
        <p className="text-black self-center text-center">or</p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => console.log('Sign up with Google')}
            className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition duration-200"
          >
            Sign up with Google
          </button>
          <button
            onClick={() => console.log('Sign up with GitHub')}
            className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-black hover:bg-gray-800 text-white font-medium transition duration-200"
          >
            Sign up with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
