import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <div className='grid grid-cols-10'>
                <div className='col-span-4 h-[960px] relative'>
                    <img className='object-cover h-full' src="https://i.ibb.co/M8rPjxg/no-food.jpg" alt="" />
                    <h1 className='font-black text-[12rem] text-[#F4C012]/80 absolute inset-0 top-72 left-12'>404</h1>
                </div>
                <div className='col-span-6 bg-[#F4C012] px-20 py-96'>
                    <h3 className='text-5xl font-bold text-[#EA572B]'>Oops...</h3>
                    <h3 className='text-2xl font-bold text-[#EA572B] mt-5'>The fridge is empty</h3>
                    <br />
                    <Link to="/" className='text-white/70 tracking-wide font-bold'>Return back home</Link>
                </div>
            </div>
        </div>
    );
};

export default Page404;