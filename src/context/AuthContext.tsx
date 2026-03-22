import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';
import { auth } from '@/config/firebase';

interface User {
  uid: string;
  email: string | null;
}

interface AuthContextType {
  // Current user (null if not logged in)
  user: User | null;
  
  // Whether user is authenticated
  isAuthenticated: boolean;
  
  // Loading state while checking auth
  isLoading: boolean;
  
  // Sign in with email and password
  signIn: (email: string, password: string) => Promise<boolean>;
  
  // Sign out
  signOut: () => Promise<void>;
  
  // Error message if any
  error: string | null;
  
  // Clear error
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Sign in with email and password
  const signIn = async (email: string, password: string): Promise<boolean> => {
    setError(null);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Помилка входу';
      
      // Translate common Firebase errors to Ukrainian
      if (errorMessage.includes('invalid-credential') || errorMessage.includes('wrong-password')) {
        setError('Невірний email або пароль');
      } else if (errorMessage.includes('user-not-found')) {
        setError('Користувача не знайдено');
      } else if (errorMessage.includes('too-many-requests')) {
        setError('Забагато спроб. Спробуйте пізніше');
      } else {
        setError('Невірний email або пароль');
      }
      return false;
    }
  };

  // Sign out
  const signOut = async () => {
    setError(null);
    try {
      await firebaseSignOut(auth);
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  // Clear error
  const clearError = () => setError(null);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    signIn,
    signOut,
    error,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
