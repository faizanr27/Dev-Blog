import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { checkAuthStatus, loginUser } from '../helpers/communicator'
import axios from 'axios'
import {BACKEND_URL} from '../config'

type User = {
  name?: string;
  email?: string;
}

interface AuthContextType {
  loginWithGoogle: () => void;
  loginWithGithub: () => void;
  isAuthenticated: boolean;
  user: User | null;
  name: string | null;
  loading: boolean;
  login:(
    email:string,
    password:string
  )=>void;
  logout: () => void;
  loggingOut: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState<string | null>(null)
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    // Fetch if the user's cookies are valid, means already logged in and no need to perform login step here
    async function checkStatus () {
      try {
        const data = await checkAuthStatus();
        console.log(data)
        if (!data) {
          setIsAuthenticated(false);
        } else {
          setUser({ email: data.email });
          setName(data.username)
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }

    checkStatus();
},[]);



  const loginWithGoogle = () => {
    window.location.href = `${BACKEND_URL}/auth/google`;
  };

  const loginWithGithub = () => {
    window.location.href = `${BACKEND_URL}/auth/github`;
  };

  const login = async(
    name:string,
    password:string
  ) => {
    const data = await loginUser(name,password);
    setIsAuthenticated(true);
    if(data){
      setUser({email :name})
      setName(data.name)
      setIsAuthenticated(true);
  }
  };

  const logout = async() => {
    setLoggingOut(true);
    try {
      const res = await axios.get(`${BACKEND_URL}/auth/logout`, {
        withCredentials: true,
      });

      if (res.status !== 200) {
        throw new Error("Logout failed");
      }

      localStorage.removeItem("userID")
      setIsAuthenticated(false);
      setUser(null);

      return res.data;
    } catch (error) {
      console.error("Logout error:", error);
      setIsAuthenticated(false);
      setUser(null);
      setName('')
      throw error;
    }
    finally {
      setLoggingOut(false);
    }
  };


  const value = {
    user,
    isAuthenticated,
    login,
    loading,
    logout,
    loginWithGoogle,
    loginWithGithub,
    loggingOut,
    name,

};

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};