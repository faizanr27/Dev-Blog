import { useNavigate, Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';
import { useAuth } from '../hooks/useAuth';

function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSignUp = async ({ email, password, name }) => {
    await signUp(email, password, name);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black/80 dark:text-white">Create an account</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Join our community of writers and readers
          </p>
        </div>

        <AuthForm onSubmit={handleSignUp} type="signup" />

        <p className="text-center text-sm text-black/80 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/signin" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;