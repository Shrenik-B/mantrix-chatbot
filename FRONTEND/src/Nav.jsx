import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black px-8 py-6 flex justify-between items-center shadow-lg">
      
      <div className="flex items-center">
        <img 
          src="/image.png" 
          alt="Logo" 
          className="h-10 w-auto"
        />
      </div>

      
      <div className="flex gap-8 items-center">
        <Link 
          to="/" 
          className="text-white no-underline text-lg font-medium hover:bg-gray-800 px-4 py-2 rounded transition-colors duration-300"
        >
          Home
        </Link>
        
        <Link 
          to="/chatbot" 
          className="text-white no-underline text-lg font-medium hover:bg-gray-800 px-4 py-2 rounded transition-colors duration-300"
        >
          Chatbot
        </Link>
        
        <Link 
          to="/forum" 
          className="text-white no-underline text-lg font-medium hover:bg-gray-800 px-4 py-2 rounded transition-colors duration-300"
        >
          Forum
        </Link>
      </div>
    </nav>
  );
}
