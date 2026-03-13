import React from "react";
interface SpinnerProps {
  size?: "sm" | "md" | "lg";
}

const Spinner: React.FC<SpinnerProps> = ({ size = "md"}) => {
  const sizeMap = { sm: "w-5 h-5 border-2", md: "w-10 h-10 border-[3px]",  lg: "w-16 h-16 border-4",};

  return (
    <div className={`relative flex items-center justify-center`} role="status">
      <div className={`${sizeMap[size]} rounded-full border-slate-100 dark:border-slate-800`}/>
    <div className={`${sizeMap[size]} absolute top-0 left-0 rounded-full
         border-transparent border-t-blue-600 animate-spin`}/>
      
      <div  className={`absolute rounded-full bg-blue-600/10 animate-pulse ${size=== "sm"?"w-2 h-2" :size==="md"? "w-4 h-4":"w-6 h-6"}`}/>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default Spinner;