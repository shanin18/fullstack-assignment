import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="border border-gray-300 rounded-xl shadow-sm bg-[#F4F6F8]">
      <h2 className="text-xl font-semibold pb-1 p-4 border-b border-gray-300 text-gray-700">{title}</h2>
      <p className="text-gray-700 pt-1 p-4">{description}</p>
    </div>
  );
};

export default Card;
