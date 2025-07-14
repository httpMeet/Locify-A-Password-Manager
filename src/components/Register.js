import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Contact, setContact] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const [ProfilePassword, setProfilePassword] = useState("")

    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        const data = { Name, Email, Contact, Password, ConfirmPassword, ProfilePassword }

        if (Password == ConfirmPassword) {
            try {
                const response = await axios.post("http://localhost/locify/register.php", data, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                if (response.data.status) {
                    alert("Registration Successfull")
                    navigate('/login')
                } else {
                    alert("Registration Failed")
                }
            } catch (e) {
                console.log(e)
            }
        } else {
            alert("Password and Confirm Password does not match")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mt-4 mb-10">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
                <form onSubmit={submitHandler}>
                    <label htmlFor="Name" className="block mb-1 text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        id="name"
                        name="name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <label htmlFor="Email" className="block mb-1 text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <label htmlFor="Contact" className="block mb-1 text-sm font-medium text-gray-700">
                        Contact Number
                    </label>
                    <input
                        type="tel"
                        placeholder="Contact Number"
                        id="contact"
                        name="contact"
                        value={Contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full p-3 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <label htmlFor="Password" className="block mb-1 text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <label htmlFor="Confirm Password" className="block mb-1 text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={ConfirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-3 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <label htmlFor="ProfilePassword" className="block mb-1 text-sm font-medium text-gray-700">
                        Profile Password
                    </label>
                    <input
                        type="password"
                        placeholder="Profile Password"
                        id="profile_password"
                        name="profile_password"
                        value={ProfilePassword}
                        onChange={(e) => setProfilePassword(e.target.value)}
                        className="w-full p-3 mb-5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-200 cursor-pointer"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 hover:underline font-medium">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
