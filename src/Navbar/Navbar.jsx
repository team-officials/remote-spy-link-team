import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-100 py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        {/* Desktop view menu */}
        <ul className="hidden md:flex space-x-4">
          <li><a href="#" className="text-gray-600 hover:text-green-500">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-green-500">Message</a></li>
          <li><a href="#" className="text-gray-600 hover:text-green-500">Phone Call</a></li>
          <li className="relative group">
            <a href="#" className="text-gray-600 hover:text-green-500">Social Media</a>
            <ul className="absolute bg-white shadow-md rounded-md space-y-2 w-48 mt-2 p-2 hidden group-hover:block">
              <li><a href="#" className="text-gray-600">WhatsApp</a></li>
              <li><a href="#" className="text-gray-600">Hidden Application</a></li>
              <li><a href="#" className="text-gray-600">All Social Media Profiles</a></li>
            </ul>
          </li>
          <li><a href="#" className="text-gray-400 cursor-not-allowed">GPS Location</a></li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <button 
          className="md:hidden text-gray-600"
          onClick={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Mobile View Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-md`}>
          <ul className="flex flex-col space-y-2 p-4">
            <li><a href="#" className="text-gray-600 hover:text-green-500">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-500">Message</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-500">Phone Call</a></li>
            <li className="relative">
              <a href="#" className="text-gray-600 hover:text-green-500">Social Media</a>
              <ul className="absolute bg-white shadow-md rounded-md space-y-2 w-48 mt-2 p-2 hidden group-hover:block">
                <li><a href="#" className="text-gray-600">WhatsApp</a></li>
                <li><a href="#" className="text-gray-600">Hidden Application</a></li>
                <li><a href="#" className="text-gray-600">All Social Media Profiles</a></li>
              </ul>
            </li>
            <li><a href="#" className="text-gray-400 cursor-not-allowed">GPS Location</a></li>
          </ul>
        </div>

        {/* Search Section */}
        <div className="flex items-center">
          <input
            className="p-2 border border-gray-300 rounded-md mr-2"
            type="text"
            placeholder="Search"
          />
          <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-400">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
