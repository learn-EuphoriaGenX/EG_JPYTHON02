import React from 'react'

function CustomInput({ label, type, placeholder, ...rest }) {
    return (
        <div>
            <label className="block text-sm font-medium mb-1">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...rest}
            />
        </div>
    )
}

export default CustomInput