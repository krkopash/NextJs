"use client";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function GalleryPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-20 uppercase font-sans animate-pulse">
      <div className="text-4xl font-black text-blue-600 tracking-tighter italic">loading...</div>
      <div className="text-[10px] font-bold text-gray-400 mt-4 tracking-widest">Connecting to db</div>
    </div>
  );

  return (
    <div className="space-y-12 font-sans p-6 max-w-6xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-xl font-black text-gray-900 tracking-tighter leading-none">THE VISUAL Gallery</h1>
        <div className="h-2 w-24 bg-blue-600 mx-auto rounded-full"></div>
        <p className="text-gray-500 font-bold tracking-[0.5em] text-xs uppercase">user IDENTITY GALLERY</p>
      </div>
      
      {users.length > 0 ? (
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-full"></div>
          <div className="relative bg-white p-8 rounded-[3rem] shadow-2xl border-8 border-gray-50 overflow-hidden">
            <Carousel showArrows={true} infiniteLoop={true} showStatus={true} showThumbs={true} emulateTouch={true}  swipeable={true} 
              renderIndicator={(clickHandler, isSelected, index) => (
                <button
                  onClick={clickHandler}
                  className={`inline-block mx-1 w-8 h-1 transition-all rounded-full ${isSelected ? "bg-blue-600" : "bg-gray-200"}`}
                />
              )}
            >
              {users.map((user, i) => (
                <div key={i} className="relative aspect-[21/9]">
                  <img  src={user.imageUrl}  alt={user.email} className="object-cover h-full w-full" />
                        <div className="bg-blue-600 px-4 py-1 inline-block rounded-lg text-[10px] font-black">ACTIVE MEMBER</div>
                        <h3 className="text-black font-black tracking-tighter uppercase leading-none">{user.email.split('@')[0]}</h3>
                        <p className="text-blue-400 text-xs font-bold tracking-widest">{user.email}</p>
                    </div>
              ))}
            </Carousel>
          </div>
        </div>
      ) : (
          <a href="/dashboard/admin" className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-xl font-black text-xs hover:bg-blue-600 transition-colors">Add users</a>
      )}  
      <div className="text-center">
        <a href="/dashboard/user" className="text-[10px] font-black text-blue-600 hover:text-black transition-colors tracking-widest border-b-2 border-blue-600 pb-1">
          Go to main dashboard
        </a>
      </div>
    </div>
  );
}