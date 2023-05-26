import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="absolute left-0 right-0">
            <div className="bg-[#EA572B] px-10 grid grid-cols-1 gap-y-4 lg:grid-cols-3 py-20">
                <div className="text-white">
                    <Link to="/" className='font-black text-3xl flex-1'>Recipe <span className="text-[#F4C012]">Fusion</span> </Link>
                </div>
                <div className="text-white font-bold">
                    <Link className="block mt-2" to="/">Home</Link>
                    <Link to="blogs" className='mt-2 block'>Blogs</Link>
                    <Link className="mt-2 block" to="login">Login</Link>
                    <Link to="register" className='mt-2 block'>Register</Link>
                </div>
                <div className=" text-white font-bold">
                    <p className='mt-2'>Address: 123 Main Street, Anytown USA, 12345</p>
                    <p className='mt-2'>Phone: 125 566-1298</p>
                    <p className='mt-2'>Email: info@recipefusion.com</p>
                </div>
            </div>
            <p className="text-[#F4C012] bg-[#EA572B] py-4 text-center">© 2023 Recipe Fusion. All Rights Reserved</p>
        </div>
    );
};

export default Footer;