import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

//these cards are for showing the services we are providing
export  function ServiceCard({ icon, title, desc }: CardProps) {
  return (
    <div  className="
        flex flex-col items-center justify-center 
        bg-white text-gray-800 
        rounded-2xl shadow-md 
        p-6 w-60 h-40 
        transition-all duration-300 
        hover:-translate-y-2 hover:bg-gradient-to-r from-blue-200 to-purple-200 hover:text-white hover:shadow-xl cursor-pointer
      ">
      <div className="text-gray-700 text-2xl mb-3">{icon}</div>
      <h4 className="text-center text-gray-800 font-bold">{title}</h4>
      <h4 className="text-center text-gray-500 font-low">{desc}</h4>
    </div>
  );
}

// these cards are for showing the qualites/certifications etc.
export function QualityCard({ icon, title }: CardProps) {
  return (
    <div  className="
        flex flex-col items-center justify-center 
        bg-white text-gray-800 
        rounded-2xl shadow-md 
        p-6 w-60 h-40 
        transition-all duration-300 
        hover:-translate-y-2 hover:bg-gradient-to-r from-blue-200 to-purple-200 hover:text-white hover:shadow-xl cursor-pointer
      ">
      <div className="text-gray-700 text-2xl mb-3">{icon}</div>
      <h4 className="text-center text-gray-800 font-medium">{title}</h4>
    </div>
  );
}


