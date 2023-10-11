import React from 'react'

export default function Radio() {
  return (
    <div>
      <div className="Select-choice flex flex-wrap">
          <div className="flex items-center mr-4">
            <input
              id="green-radio"
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="green-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
            >
              Symbols
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="green-radio"
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="green-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
            >
              Characters
            </label>
          </div>
        </div>
    </div>
  )
}
