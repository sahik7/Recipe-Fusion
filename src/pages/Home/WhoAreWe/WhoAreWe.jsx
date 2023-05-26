import React from 'react';

const WhoAreWe = () => {
    return (
        <div className="my-32">
            <div className="grid grid-cols-6 w-10/12 mx-auto">
                <div className="lg:col-span-2  col-span-6">
                    <img className="rounded-tl-lg rounded-bl-lg h-full object-cover w-full" src="https://burst.shopifycdn.com/photos/finger-food-and-drinks-on-dark-wood.jpg?width=925&format=pjpg&exif=1&iptc=1" alt="" />
                </div>
                <div className="lg:col-span-4 lg:px-14 py-8 col-span-6">
                    <h1 className="text-4xl border-l-2 pl-2 border-[#EA572B] font-bold">Who Are We?</h1>
                    <p className="mt-8 text-gray-600">Welcome to Recipe Fusion, your go-to destination for authentic Italian cuisine! Our team is passionate about sharing the rich and diverse culinary traditions of Italy with food lovers everywhere.
<br />
Our mission is to provide you with delicious and easy-to-follow recipes that celebrate the flavors and ingredients of Italian cuisine. We believe that food is not just nourishment, but a way to connect with others and create memorable experiences.
<br />
Our team is made up of experienced chefs, food bloggers, and recipe developers who are dedicated to bringing you the best Italian recipes from all over the country. From classic dishes like pasta carbonara and margherita pizza, to regional specialties like Sicilian arancini and Venetian risotto, we are committed to providing you with an authentic Italian dining experience.</p>
                </div>
            </div>
        </div>
    );
};

export default WhoAreWe;