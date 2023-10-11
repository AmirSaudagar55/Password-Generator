import React from 'react'

export default function Range() {
  let min = 0;
  let max = 0;
  return (
      
    <div className="range mt-4">
    <div>
      <label
        htmlFor="customRange2"
        className="mb-2 inline-block text-neutral-200 dark:text-neutral-500"
      >
        Select Range From {min} to {max}
      </label>
      <input
        type="range"
        className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
        min="0"
        max="5"
        id="customRange2"
      />
    </div>
  </div>
  )
}
