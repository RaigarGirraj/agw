
import React from 'react';


const Card = ({ name, image }) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden  w-44 md:w-52 lg:w-56">
      <img src={image} alt={name} className="center w-44 h-44  md:w-52 md:h-52 lg:w-56 lg:h-56" />
      <div className="m-2 inset-0 flex items-center justify-center bg-opacity-50">
        <h3 className=" text-center align-middle text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default Card;
