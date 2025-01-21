import { useState } from 'react';

function AuthForm({ onSubmit, type }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await onSubmit(formData);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {type === 'signup' && (
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-black/80 dark:text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 dark:bg-white/20 bg-slate-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5FB2] transition duration-200 text-black/80 dark:text-white"
            required
          />
        </div>
      )}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-black/80 dark:text-gray-400">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 dark:bg-white/20 bg-slate-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5FB2] transition duration-200 text-black/80 dark:text-white"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1 text-black/80 dark:text-gray-400">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5FB2] transition duration-200 text-black/80 dark:bg-white/20 bg-slate-400/20 dark:text-white"
          required
        />
      </div>
      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}
      <button
        type="submit"
        className="w-full btn btn-primary"
      >
        {type === 'signup' ? 'Sign Up' : 'Sign In'}
      </button>
    </form>
  );
}

export default AuthForm;