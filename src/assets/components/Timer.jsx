
import React, { useState, useEffect } from 'react';

const Timer = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = + new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (<>
    <h1 className=' text-center text-red-400 mb-8 text-3xl lg:text-5xl '>Event Starts in</h1>
    <div className=" w-auto flex justify-center space-x-2 ">
      {timeLeft.days >= 0 && (
        <div className="flex flex-col items-center w-1/5 bg-blue-200 rounded-lg p-3 lg:w-auto lg:p-4 lg:flex-row lg:items-end">
          <span className="text-xl lg:text-3xl">{timeLeft.days}</span>
          <span className="text-lg lg:text-xl">days</span>
        </div>
      )}
      {timeLeft.hours >= 0 && (
        <div className=" flex flex-col items-center w-1/5 bg-green-200 rounded-lg p-3 lg:w-auto lg:p-4 lg:flex-row lg:items-end">
          <span className="text-xl  lg:text-3xl">{timeLeft.hours}</span>
          <span className="text-lg lg:text-xl">hours</span>
        </div>
      )}
      {timeLeft.minutes >= 0 && (
        <div className="flex flex-col items-center w-1/5 bg-yellow-200 rounded-lg p-3 lg:w-auto lg:p-4 lg:flex-row lg:items-end">
          <span className="text-xl  lg:text-3xl">{timeLeft.minutes}</span>
          <span className="text-lg lg:text-xl">minutes</span>
        </div>
      )}
      {timeLeft.seconds >= 0 && (
        <div className=" flex flex-col items-center w-1/5 bg-pink-200 rounded-lg p-3 lg:w-auto lg:p-4 lg:flex-row lg:items-end">
          <span className="text-xl lg:text-3xl">{timeLeft.seconds}</span>
          <span className="text-lg lg:text-xl">seconds</span>
        </div>
      )}
    </div>
    </>
  );
};

export default Timer;
