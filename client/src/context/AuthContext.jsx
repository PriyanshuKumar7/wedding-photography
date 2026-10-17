/* Feature: Auth State Placeholder (Future: Admin Login) */
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // TODO: BACKEND CONNECT - Login/Logout logic
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};