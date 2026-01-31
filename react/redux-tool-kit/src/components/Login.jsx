import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "./CustomInput";
import toast, { Toaster } from "react-hot-toast";

function Login({ user, setUser }) {


    let navigate = useNavigate()

    let handleOnSubmit = (e) => {
        e.preventDefault()
        if (!user.email.trim() && !user.password.trim()) {
            toast.error('Email And Password Required!', { position: "bottom-center" });
            return;
        }

        toast.success('Login Successfull!', { position: "bottom-center" });
        setUser({ ...user, isLoggedIn: true })
        navigate("/")
    }




    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                {/* Title */}
                {/* Form */}
                <form onSubmit={handleOnSubmit} className="space-y-4">
                    {/* Email */}
                    <CustomInput onChange={(e) => setUser({ ...user, email: e.target.value })} name={"email"} value={user.email} label={"Email"} placeholder={"Enter your email"} type={"email"} />


                    {/* Password */}
                    <CustomInput onChange={(e) => setUser({ ...user, password: e.target.value })} name={"password"} value={user.password} label={"Password"} placeholder={"Enter your password"} type={"password"} />

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
