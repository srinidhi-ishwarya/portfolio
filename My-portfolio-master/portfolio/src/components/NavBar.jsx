import React, { useState ,useEffect} from "react";
import { Menu, X } from "lucide-react";
// import logo from "../assets/port-removebg-preview.png"; // Ensure correct path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll position as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <nav className="bg-[#0f0f3d] text-white shadow-lg sticky top-0 z-50">
    <nav className={`shadow-lg sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-slate-900 text-white' : 'bg-[#0f0f3d] text-[#f0f83d]'}`} >

      <div className="flex justify-between items-center p-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img className="h-14 w-14" src='assets/port-removebg-preview.png' alt="Logo" />
          <h1 className="text-xl font-bold italiana-regular">Portfolio</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center  ">
        <a href="#home" className=" transition duration-300  hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium relative group ">Home</a>
          <a href="#about" className="transition duration-300  hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium relative group ">About</a>
          <a href="#projects" className="transition duration-300  hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium relative group">Projects</a>
          <a href="#footer" className="transition duration-300  hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium relative group">Contact</a>
          
        </div>
        <div className="hidden md:flex space-x-6 items-center">
        <a 
            href="https://github.com/chaan3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-[#0f0f3d] px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden bg-[#0f0f3d] p-4 space-y-2 ${scrolled ? 'bg-slate-900 text-white' : 'bg-[#0f0f3d] text-[#f0f83d]'}`}>
          <a href="#home" className="block px-3 py-2  hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" className="block px-3 py-2 hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" className="block px-3 py-2 hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#footer" className="block px-3 py-2 hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a 
            href="https://github.com/chaan3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="m-2 px-2.5 py-2 bg-white text-[#0f0f3d] rounded-md"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
