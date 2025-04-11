import React from "react";
import './App.css'
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Dashboard />
      </AuthProvider>
    </div>
  );
};

export default App;
