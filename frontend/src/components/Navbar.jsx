import React from "react";

const Navbar = ({openModal}) => {
  return (
    <nav className="bg-black ">
      <div className="max-w-7xl mx-auto text-white p-4 flex items-center justify-between flex-wrap gap-y-3">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-semibold">Abstract</span>
          <span className="text-lg">| Help Center</span>
        </div>

        <button onClick={openModal} className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300">
          Submit a Request
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
