import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  hoverDesc :string;
  link?: string;
}

//these cards are for showing the services we are providing
// export  function ServiceCard({ icon, title, desc }: CardProps) {
//   return (
//     <div  className="
//         flex flex-col items-center justify-center 
//         bg-white text-gray-800 
//         rounded-2xl shadow-md 
//         p-6 w-60 h-40 
//         transition-all duration-300 
//         hover:-translate-y-2 hover:bg-gradient-to-r from-blue-200 to-purple-200 hover:text-white hover:shadow-xl cursor-pointer
//       ">
//       <div className="text-gray-700 text-2xl mb-3">{icon}</div>
//       <h4 className="text-center text-gray-800 font-bold">{title}</h4>
//       <h4 className="text-center text-gray-500 font-low">{desc}</h4>
//     </div>
//   );
// }

// // these cards are for showing the qualites/certifications etc.
// export function QualityCard({ icon, title }: CardProps) {
//   return (
//     <div  className="
//         flex flex-col items-center justify-center 
//         bg-white text-gray-800 
//         rounded-2xl shadow-md 
//         p-6 w-60 h-40 
//         transition-all duration-300 
//         hover:-translate-y-2 hover:bg-gradient-to-r from-blue-200 to-purple-200 hover:text-white hover:shadow-xl cursor-pointer
//       ">
//       <div className="text-gray-700 text-2xl mb-3">{icon}</div>
//       <h4 className="text-center text-gray-800 font-medium">{title}</h4>
//     </div>
//   );
// }


export function ServiceCard({ icon, title, desc, hoverDesc, link }: CardProps) {
  return (
    <div
      className="
        group
        relative
        flex flex-col items-center justify-center 
        bg-white text-gray-800 
        rounded-2xl shadow-md 
        p-6 w-60 h-40 
        transition-all duration-300 
        hover:-translate-y-2 hover:shadow-xl cursor-pointer
      "
    >
      {/* Default view (before hover) */}
      <div className="flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
        <div className="text-gray-700 text-2xl mb-3">{icon}</div>
        <h4 className="text-center text-gray-800 font-bold">{title}</h4>
        <h4 className="text-center text-gray-500 font-light">{desc}</h4>
      </div>

      {/* Hover view (after hover — the detailed box) */}
      <div
        className="
          absolute inset-0 
          opacity-0 group-hover:opacity-100 
          bg-gradient-to-r from-blue-200 to-purple-200
          rounded-2xl p-4
          transition-opacity duration-300
          flex flex-col justify-center items-start
        "
      >
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-sm text-gray-600 leading-tight">{hoverDesc}</p>

         {link && (
          <a
            href={link}
            className="
              mt-3 text-sm font-medium text-blue-600
              hover:underline
            "
          >
            Learn more →
          </a>
        )}
      </div>
    </div>
  );
}
