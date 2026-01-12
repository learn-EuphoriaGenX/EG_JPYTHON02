import React from 'react'

function Input({ type, placeholder, ...props }) {
  return (
    <input type={type} className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none " placeholder={placeholder} {...props} />
  )
}

export default Input