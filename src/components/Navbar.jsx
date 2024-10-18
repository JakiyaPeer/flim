import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white text-xl">
          OMDb Movie App
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
