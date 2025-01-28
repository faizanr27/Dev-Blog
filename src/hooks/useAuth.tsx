import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    // Mock authentication
    setUser({ email, name: email.split('@')[0] });
    return Promise.resolve();
  };

  const signUp = (email, password, name) => {
    // Mock registration
    setUser({ email, name });
    return Promise.resolve();
  };

  const signOut = () => {
    setUser(null);
    return Promise.resolve();
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}