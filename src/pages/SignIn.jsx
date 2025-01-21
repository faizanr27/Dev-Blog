import { useNavigate, Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';
import { useAuth } from '../hooks/useAuth';

function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSignIn = async ({ email, password }) => {
    await signIn(email, password);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold dark:text-white text-black/80">Welcome back</h2>
          <p className="mt-2 text-black/80 dark:text-gray-400">
            Sign in to your account
          </p>
        </div>

        <AuthForm onSubmit={handleSignIn} type="signin" />

        <p className="text-center text-sm text-black/80 dark:text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;