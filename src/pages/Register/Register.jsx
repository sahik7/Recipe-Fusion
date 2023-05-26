import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const [error, setError] = useState("");

    const { register, updateNameAndImage } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoUrl.value;
        setError("")
        if (!email) {
            setError("Please fill the email field")
        }
        else if (!password) {
            setError("Please fill the password field")
        }
        else if (password.length < 6) {
            setError("The password is less than 6 characters")
        }
        else if (!/[a-z]/.test(password) && !/[A-Z]/.test(password)) {
            setError("Your password must contain at least one letter.")
            return
        }
        else if (!/[0-9]/.test(password)) {
            setError("Your password must contain at least one digit.")
            return
        }
        register(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    updateNameAndImage(displayName, photoURL);
                }
                form.reset();
                navigate("/login")
            }).catch(error => {
                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    setError("User Already Exists. Please Login")
                }else if(error.code === "auth/invalid-email"){
                    setError("Invalid Email")
                }
            })


    }




    return (
        <div>
            <div className='grid grid-cols-10'>
                <div className="col-span-3 bg-gradient-to-tr from-[#facb33] to-[#ff962d]">
                    <h1 className='font-bold text-6xl text-[#fed292] pl-20 mt-36'>Savor the Authenticity of Italy</h1>
                    <img className='absolute' src="https://i.ibb.co/DMhb8H8/login.png" alt="" />
                </div>
                <div className="col-span-7  px-40 py-[211px]">
                    <h1 className='text-3xl font-black'>Register</h1>
                    <form onSubmit={handleRegister} className='mt-20'>
                        <div className=" items-center justify-center space-y-10">
                            <div className="relative">
                                <input
                                    type="text"
                                    name='name'
                                    className="block w-10/12 border border-gray-400 focus:border-black px-4 py-2 text-lg placeholder-gray-400 bg-transparent rounded-md focus:outline-none focus:-black"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute -top-3 font-light left-6 text-gray-600 px-1 text-sm bg-white"
                                >
                                    Name
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    name='email'
                                    className="block w-10/12 border border-gray-400 focus:border-black px-4 py-2 text-lg placeholder-gray-400 bg-transparent rounded-md focus:outline-none focus:-black"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute -top-3 font-light left-6 text-gray-600 px-1 text-sm bg-white"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    name='password'
                                    className="block border border-gray-400 focus:border-black w-10/12 px-4 py-2 text-lg placeholder-gray-400 bg-transparent rounded-md focus:outline-none focus:-black"
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute -top-3 font-light left-6 text-gray-600 px-1 text-sm bg-white"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name='photoUrl'
                                    className="block w-10/12 border border-gray-400 focus:border-black px-4 py-2 text-lg placeholder-gray-400 bg-transparent rounded-md focus:outline-none focus:-black"
                                />
                                <label
                                    htmlFor="Photo URL"
                                    className="absolute -top-3 font-light left-6 text-gray-600 px-1 text-sm bg-white"
                                >
                                    Photo URL
                                </label>
                            </div>
                        </div>
                        <p className='mt-6 text-md text-[#fc4b3e] tracking-wide'>{error} {error && "!!!"}</p>
                        <button className='block w-10/12 px-4 py-2 bg-[#EA572B] rounded-md mt-8 text-white font-bold'>Register</button>
                    </form>
                    <p className='mt-5 text-gray-600 text-sm'>Already have an account? <Link to="/login" className='text-[#EA572B] ml-1'> Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;