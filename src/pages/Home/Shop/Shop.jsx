import React from 'react';

const Shop = () => {
    return (
        <div className="bg-[url('https://burst.shopifycdn.com/photos/fried-comfort-food-chicken.jpg?width=925&format=pjpg&exif=1&iptc=1')] bg-cover bg-center w-10/12 mx-auto mt-40 flex justify-center items-center h-screen">
            <div className="p-8 lg:px-32 bg-[#EA572B] w-8/12 text-center">
                <h1 className='text-3xl font-bold text-white'>Shop</h1>
                <p className='mt-5 text-white text-sm'>The "Shop" section on your website is a dedicated area where customers can browse and purchase your products or services online. It's a virtual storefront that allows you to showcase your offerings, build your brand, and generate revenue through online sales.</p>
                <button className='mt-5 py-2 px-6 rounded bg-[#F4C012] text-bold text-[#EA572B]'>Shop Now</button>
            </div>
        </div>
    );
};

export default Shop;