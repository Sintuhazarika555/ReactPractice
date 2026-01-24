import React, { useState } from "react" 


function C1() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-lime-100 p-8 rounded-full shadow-md w-80 text-center">
        <h1 className="text-2xl font-bold text-lime-500 mb-4">
          Your Mood Meter
        </h1>

        <p className="text-gray-600 mb-6">
          You Mood meter is :   <span className="font-semibold">{count}</span> 
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-4 text-5xl rounded-full"
          >
            🥲
          </button>
          
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-4 text-5xl rounded-full"
          >
            🤣
          </button>

        </div>
                
        <p className="text-gray-600 mb-6">
          Click on the Above Moods 
        </p>
      </div>
    </div>
  );
}
export default C1;

