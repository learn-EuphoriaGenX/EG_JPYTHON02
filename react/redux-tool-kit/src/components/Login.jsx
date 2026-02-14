import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "./CustomInput";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "./store/slices/authSlice";

function Login() {


    let navigate = useNavigate()
    let dispatch = useDispatch()

    let [user, setUser2] = useState({
        email: "",
        password: ""
    })


    let handleOnSubmit = (e) => {
        e.preventDefault()
        if (!user.email.trim() && !user.password.trim()) {
            toast.error('Email And Password Required!', { position: "bottom-center" });
            return;
        }
        dispatch(setUser({ email: user.email, password: user.password }))

        toast.success('Login Successfull!', { position: "bottom-center" });
        navigate("/")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                {/* Title */}
                {/* Form */}
                <form onSubmit={handleOnSubmit} className="space-y-4">
                    {/* Email */}
                    <CustomInput onChange={(e) => setUser2({ ...user, email: e.target.value })} name={"email"} value={user.email} label={"Email"} placeholder={"Enter your email"} type={"email"} />


                    {/* Password */}
                    <CustomInput onChange={(e) => setUser2({ ...user, password: e.target.value })} name={"password"} value={user.password} label={"Password"} placeholder={"Enter your password"} type={"password"} />

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
