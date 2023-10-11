import React from "react";
import Radio from "./Radio";
import Range from "./Range";

function Input() {

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mx-20 flex flex-col items-center">
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Password"
              aria-label="Password"
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Copy
            </button>
          </div>
        </form>

        <Range/>
        <Radio/>
        
      </div>
    </div>
  );
}

export default Input;
