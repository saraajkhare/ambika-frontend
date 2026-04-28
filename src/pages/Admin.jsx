import { useState, useEffect } from "react";
import AdminLogin from "../components/AdminLogin";
import AdminDashboard from "../components/AdminDashboard";

const Admin = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check if token exists in session
    const storedToken = sessionStorage.getItem("adminToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminToken");
    setToken(null);
  };

  // Conditionally render login or dashboard
  if (!token) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard token={token} onLogout={handleLogout} />;
};

export default Admin;
