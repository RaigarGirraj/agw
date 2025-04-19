import React, { useState } from 'react';
// import '../stylesheets/HoverCard.css';

// import img from '../Images/1.jpeg'
const HoverCard = (props) => {
  const { id, title, description, imageSrc, bio } = props.Data;
  const display = props.display


  return (
    <div
      className={`relative w-72 bg-indigo-300 h-96 rounded overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out`}
      // onMouseEnter={handleFlip}
      // onMouseLeave={handleFlip}
    >

      <div className="absolute inset-0  text-white flex items-center justify-center transition-opacity duration-300 ease-in-out">
        <div className=" flex flex-col items-center justify-center text-center">
          
          
          <img className="w-56 h-56 object-cover object-center rounded-full" src={imageSrc} alt={title} />
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className='role text-sm'>{description}</p>
          <button className="infoButton bg-white text-indigo-500 px-4 py-2 rounded-full" onClick ={() => {
            document.querySelector('.infoBox').style.display = 'block';
            document.querySelector('.layer').classList.toggle('activeL');
            // document.querySelector('.infoBox').setAttribute('id', `${id}`);
            document.querySelector('.popupContent').innerHTML = `
            <h2>About Speaker</h2>
            <p>${bio}</p>`;

          }} style={{display : display}}>About</button>
          {/* {isFlipped&&<p>{description}</p>}
          {isFlipped&&<p>{bio}</p>} */}
        </div>
      </div>

    
      {/* <div className="flip-back absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center transition-opacity duration-1000 ease-in-out opacity-0">
        <div className="text-center">
          <p>{description}</p>
          <p>{bio}</p>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default HoverCard;


