import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AdminDashboard = ({ token, onLogout }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch("https://ambika-housing.onrender.com/api/enquiry", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        
        const data = await response.json();
        if (data.success) {
          setLeads(data.data);
        } else {
          toast.error("Failed to load leads. Unauthorized.");
          onLogout();
        }
      } catch (err) {
        toast.error("Error connecting to server. Is backend deployed?");
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, [token, onLogout]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Leads Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              You have <span className="font-semibold text-[#e30613]">{leads.length}</span> total inquiries.
            </p>
          </div>
          <button 
            onClick={onLogout}
            className="px-5 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors font-medium cursor-pointer"
          >
            Log Out
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Date</th>
                  <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Name</th>
                  <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Phone</th>
                  <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Email</th>
                  <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Property</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-gray-500">Loading leads...</td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-gray-500">No leads found.</td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr 
                      key={lead._id} 
                      className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="p-4 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-sm font-medium text-gray-900 dark:text-white">
                        {lead.name}
                      </td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-300 text-[#e30613] font-mono">
                        {lead.phone}
                      </td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                        {lead.email}
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-xs font-semibold whitespace-nowrap">
                          {lead.property}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
