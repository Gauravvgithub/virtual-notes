import React, { createContext, useState } from "react";
import myImage from '../assets/image.png'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Gaurav", email: "gauravraj7011@gmail.com", imgSrc:myImage});
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
