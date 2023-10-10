import React from 'react'

export default function Range() {
  return (
      <div>
  <label
    for="customRange2"
    className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
    >Example range</label
  >
  <input
    type="range"
    className="transparent h-[4px] w-full cursor-pointer
  appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
    min="0"
    max="5"
    id="customRange2" />
</div>
  )
}
