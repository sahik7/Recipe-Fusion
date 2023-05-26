import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../../provider/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex lg:w-9/12 w-11/12 items-center py-6 bg-transparent absolute z-30 left-1/2 transform -translate-x-1/2'>

            {/* Logo */}
            <Link to="/" className='font-black text-3xl flex-1'><span className='text-[#EA572B]'>Recipe</span><span className='text-[#F4C012]'>Fusion</span></Link>

            {/* Routes */}
            <div className='flex-grow text-center space-x-20 hidden lg:block font-bold'>
                <NavLink className={({ isActive }) => (isActive ? "text-[#EA572B]" : "text-orange-200")} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-[#EA572B]" : "text-orange-200")} to="/blogs">Blogs</NavLink>
            </div>




            {/* Conditional login button */}
            {user ? <>
                <div className={`border-2 hidden ${!user.photoURL ? "lg:hidden" : "lg:block"}  border-orange-200 p-1 rounded-full`}>
                    <img className={`w-[40px] rounded-full ${!user.photoURL && "hidden"}`} src={user?.photoURL} alt="" title={user && user.displayName} />
                </div>
                <button onClick={logOut} className="ml-5 hidden lg:block bg-[#EA572B] px-4 py-2 rounded text-sm text-orange-200">Logout</button>
            </>
                :
                <Link to="login"><button className="bg-[#EA572B] px-4 py-2 rounded text-sm text-orange-200 hidden lg:block">Login</button></Link>}



            <div className="lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center w-10 h-10 text-[#EA572B] rounded-md">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
                </button>

                {isOpen && (
                    <div className="absolute left-0 top-20 w-full bg-white shadow-md rounded-md">
                        <div className="p-4 bg-[#EA572B]">
                            <nav className="space-y-4">
                                <Link to="/" className="block font-medium text-lg text-[#F4C012]">Home</Link>
                                <Link to="/blogs" className="block font-medium text-lg text-[#F4C012]">blogs</Link>
                                {user ? <>
                                    <div className="w-12 border-2 border-orange-200 p-1 rounded-full">
                                        <img className={`w-[40px] rounded-full ${!user.photoURL && "hidden"}`} src={user?.photoURL} alt="" />
                                    </div>
                                    <button onClick={logOut} className="bg-[#F4C012] px-3 py-2 text-[#EA572B] rounded text-sm mt-5 lg:mt-0">Logout</button></> : <Link to="login"><button className="bg-[#F4C012] px-3 py-2 text-[#EA572B] rounded text-sm mt-5 lg:mt-0">Login</button></Link>}
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavigationBar;