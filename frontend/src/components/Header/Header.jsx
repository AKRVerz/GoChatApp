import React from "react";
import header from "../../image/header.jpg";

const Header = () => (
  <div className="bg-blue-600 p-4 rounded-lg shadow-md w-full max-w-2xl text-center flex items-center justify-center">
    <img
      src={header}
      alt="Header Logo"
      className="h-12 w-12 md:h-16 md:w-16 mr-4" // Adjust height, width, and margin as needed
    />
    <h2 className="text-white text-2xl md:text-3xl font-bold">
      Chat App "AKRVerz"
    </h2>
  </div>
);

export default Header;

