import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");
    const { signInWithGoogle, signInWithGithub, signIn, user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(() => {
            form.reset();
            navigate(from, { replace: true })
        }).catch(err => {
            if (err.code === 'auth/wrong-password') {
                setError("Wrong Password")
            }
        })
    }

    const handleLoginWithGoogle = () => {
        signInWithGoogle()
        .then(() => {
            navigate(from, { replace: true })
        })
    }


    const handleLoginWithGithub = () => {
        signInWithGithub()
        .then(() => {
            navigate(from, { replace: true })
        })
    }

    return (
        <div>
            <div className='grid grid-cols-10'>
                <div className="col-span-3 bg-gradient-to-tr from-[#facb33] to-[#ff962d]">
                    <h1 className='font-bold text-6xl text-[#fed292] pl-20 mt-36'>Savor the Authenticity of Italy</h1>
                    <img className='absolute' src="https://i.ibb.co/DMhb8H8/login.png" alt="" />
                </div>
                <div className="col-span-7  px-40 py-[200px]">
                    <h1 className='text-3xl font-black'>Login</h1>
                    <form onSubmit={handleLogin} className='mt-20'>
                        <div className=" items-center justify-center space-y-10">
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
                        </div>
                        <p className='mt-6 text-md text-[#fc4b3e] tracking-wide'>{error} {error && "!!!"}</p>
                        <button className='block w-10/12 px-4 py-2 bg-[#EA572B] rounded-md mt-8 text-white font-bold'>Login</button>
                    </form>
                    <p className='mt-5 text-gray-600 text-sm'>Don't have an account? <Link to="/register" className='text-[#EA572B] ml-1'> Register</Link></p>
                    <div className='flex items-center space-x-4 w-10/12 justify-center my-14'>
                        <hr className='w-2/4' />
                        <p >OR</p>
                        <hr className='w-2/4' />
                    </div>
                    {/* Sign in with third party app*/}
                    <div className='flex justify-between w-10/12'>
                        <button onClick={handleLoginWithGoogle} className='px-4 py-3 border flex items-center rounded-lg'> <img className="w-[32px] mr-1" src="https://i.ibb.co/287cj8z/google.png" alt="" /> Sign in with Google</button>
                        <button onClick={handleLoginWithGithub} className='px-4 py-3 border flex items-center rounded-lg'> <img className="w-[26px] mr-2" src="https://i.ibb.co/mCtP6Ks/github.png" alt="" /> Sign in with Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;