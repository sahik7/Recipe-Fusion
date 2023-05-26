import React from 'react';

const Banner = () => {
    return (
        <div>
            <img className='object-cover object-center w-full h-[80vh]' src="https://i.ibb.co/vVGC3Xy/banner.jpg" alt="" />
            <div className='bg-black/50 h-[80vh] absolute inset-0 z-20 flex items-center justify-center'>
                <h1 className='text-white text-xl font-bold text-center w-9/12'><span className='text-5xl lg:text-7xl text-[#F4C012]'>La <span className='text-[#EA572B]'>Cucina</span> Italiana</span> <br /> Discover the Authentic Recipes of Italy</h1>
            </div>
        </div >

    );
};

export default Banner;