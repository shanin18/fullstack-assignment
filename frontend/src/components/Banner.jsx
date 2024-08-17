import React from "react";

const Banner = ({ setSearchTerm }) => {
  return (
    <div className="bg-[#DADBF0] flex justify-center py-24">
      <div className="w-full text-center ">
        <h1 className="mb-4 lg:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center">
          How can we help?
        </h1>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 lg:py-3 outline-none border border-black rounded w-[65%] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[30%]"
          placeholder="Search"
          type="text"
        />
      </div>
    </div>
  );
};

export default Banner;
