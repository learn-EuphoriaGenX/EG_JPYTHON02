import React from 'react'

function Button({ text, type, ...props }) {

    let scheme = {
        'add': 'bg-indigo-500 hover:bg-indigo-700',
        'delete': 'bg-red-500 hover:bg-red-700',
        'edit': 'bg-green-500 hover:bg-green-700',
        'done': 'bg-yellow-500 hover:bg-yellow-700',
    }

    return (
        <button className={`py-2.5 whitespace-nowrap h-11 px-6 text-sm ${scheme[type]} text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500`} {...props}>{text}</button>
    )
}

export default Button