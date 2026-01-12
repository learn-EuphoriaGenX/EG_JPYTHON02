import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white w-full max-w-md p-8 rounded-lg shadow">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Register in Furniro
                </h2>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <button className="w-full bg-[#B88E2F] text-white py-2 rounded hover:bg-gray-800 transition">
                        Register
                    </button>
                </form>

                <p className="text-sm text-center mt-6 text-gray-500">
                    Already have an account?
                    <Link to='/login' className="text-black font-medium cursor-pointer ml-1">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register