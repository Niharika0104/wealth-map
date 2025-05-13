"use client"

import { 
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  ReactNode 
} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  email: string;
  region: string;
  role: string;
  phone_number?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<any>;
  register: (userData: any) => Promise<any>;
  logout: () => Promise<void>;
  verifyMfa: (userId: string, code: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    // Try to get token from localStorage
    const storedToken = localStorage.getItem('auth_token');
    if (storedToken) {
      setToken(storedToken);
      fetchUser(storedToken);
    } else {
      setIsLoading(false);
    }
  }, []);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    withCredentials: true,
  });

  // Add token to all requests
  api.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  const fetchUser = async (authToken: string) => {
    try {
      setIsLoading(true);
      const response = await api.get('/auth/me');
      setUser(response.data);
    } catch (error) {
      console.error('Failed to fetch user:', error);
      // Clear token if invalid
      localStorage.removeItem('auth_token');
      setToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await api.post('/auth/login', { email, password });
      
      // Check if MFA is required
      if (response.data.mfaRequired) {
        return response.data;
      }
      
      // Set the token and user
      localStorage.setItem('auth_token', response.data.token);
      setToken(response.data.token);
      setUser(response.data.user);
      
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyMfa = async (userId: string, code: string) => {
    setIsLoading(true);
    try {
      const response = await api.post('/auth/verify-mfa', { userId, code });
      
      // Set the token and user
      localStorage.setItem('auth_token', response.data.token);
      setToken(response.data.token);
      setUser(response.data.user);
      
      return response.data;
    } catch (error) {
      console.error('MFA verification error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: any) => {
    setIsLoading(true);
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear token and user regardless of API call success
      localStorage.removeItem('auth_token');
      setToken(null);
      setUser(null);
      router.push('/login');
    }
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    token,
    login,
    register,
    logout,
    verifyMfa,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
