"use client";
import { useState, useEffect } from "react";

export default function UserListPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await res.json();
        setUsers(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch users", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
        <h1 className="text-4xl font-black tracking-tighter">REGISTERED USER DIRECTORY</h1>
      
      {loading ? (
        <div className="flex items-center gap-2 font-bold text-blue-600 italic animate-pulse">
          ACCESSING SECURE DATA...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, i) => (
            <div key={i} className="group bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-2xl overflow-hidden border-2 border-gray-100 group-hover:border-blue-200 transition-colors">
                  <img 
                    src={user.imageUrl} 
                    alt={user.email} 
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-black text-gray-900 truncate uppercase">{user.email.split('@')[0]}</h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">LEVEL: ACTIVE USER</p>
                </div>
              </div>
              
              <div className="space-y-2 border-t-2 border-gray-50 pt-4">
                <div className="flex justify-between items-center text-[10px] font-black">
                  <span className="text-gray-400">EMAIL:</span>
                  <span className="text-blue-600 truncate max-w-[150px]">{user.email}</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-black">
                  <span className="text-gray-400">STATUS:</span>
                  <span className="text-green-600">VERIFIED</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {users.length === 0 && !loading && (
        <div className="p-20 text-center border-4 border-dashed border-gray-100 rounded-3xl">
          <p className="text-gray-300 font-black text-2xl uppercase tracking-widest italic">NO SYSTEM USERS DETECTED</p>
          <p className="text-gray-400 text-xs font-bold mt-2">ADMIN MUST POPULATE DATABASE VIA MANAGEMENT PANEL</p>
        </div>
      )}
    </div>
  );
}