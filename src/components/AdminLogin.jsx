import { useState } from "react";
import toast from "react-hot-toast";

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // For local testing before deploying backend, you might need http://localhost:5001
      const response = await fetch("https://ambika-housing.onrender.com/api/enquiry/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        sessionStorage.setItem("adminToken", data.token);
        onLogin(data.token);
        toast.success("Login successful");
      } else {
        toast.error("Invalid password");
      }
    } catch (error) {
      toast.error("Network error. Make sure backend is running/deployed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 transition-colors duration-300">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-none p-8 space-y-6 border border-gray-100 dark:border-gray-700">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Portal</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Enter the master password to view leads</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e30613]/50 focus:border-[#e30613] transition-all text-gray-900 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#e30613] hover:bg-[#c9000c] disabled:bg-gray-400 text-white font-bold tracking-wide py-3 rounded-lg shadow-md transition-all duration-200"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
