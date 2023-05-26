import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const IndividualChef = ({ chef }) => {
    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <div className="border border-black/20 rounded-xl">
            <LazyLoadImage effect="blur" className="rounded-lg" src={chefPicture} />
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className='text-xl font-bold'>{chefName}</h3>
                        <p className="text-sm text-gray-500">Experience: {yearsOfExperience} years</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-[#e43804] ml-3" icon={faHeart} />
                        <p className="text-xs text-gray-500">{likes}likes</p>
                    </div>
                </div>
                <p className="font-bold my-5 text-[#e43804]">Total {numberOfRecipes} Recipes</p>

                <Link to={`recipe/${id}`} className="text-sm transition duration-300 ease-in-out hover:bg-[#f75f07] text-white border px-3 py-2 rounded-2 bg-[#EA572B] transform hover:scale-95 font-bold">View Recipes</Link>
            </div>
        </div>
    );
};

export default IndividualChef;