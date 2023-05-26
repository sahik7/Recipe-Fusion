import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import RecipeCard from '../../component/RecipeCard';

const ChefRecipes = () => {
    const {  chefName, chefPicture, description,likes,numberOfRecipes,yearsOfExperience, recipes
    } = useLoaderData()
   
    return (
        <div className="my-32 w-9/12 left-0 right-0 mx-auto">
            
            <div className="grid grid-cols-10">
                <div className="col-span-4">
                    <img src={chefPicture} alt="" />
                </div>
                <div className="col-span-6 p-8 border-l-4 border-[#EA572B]">
                    <h1 className="text-3xl font-bold">{ chefName}</h1>
                    <h4 className="mt-3 text-sm text-[#EA572B]">Experience: {yearsOfExperience} years</h4>
                    <p className="text-gray-500 mt-2">{description}</p>
                    <div className="flex justify-between items-center mt-10 mx-1">
                    <h4 className=" text-xl">Total {numberOfRecipes} Recipes</h4>
                    <div className="flex items-center space-x-2">
                <FontAwesomeIcon className="text-[#e43804]" icon={faHeart} />
                <p className="text-xs text-gray-500">{likes}likes</p>
                </div>
                    </div>
                </div>
            </div>
            <div className='my-36'>
            <h1 className='font-black text-4xl text-center'>Recipes</h1>
            <hr className="border-2 rounded border-[#EA572B] mx-auto w-1/12 mt-3"></hr>
            {/* card group */}
            <div className="grid grid-cols-2 mt-20 gap-10">
            {
                recipes.map(recipe => <RecipeCard recipe={recipe}/>)
            }
            </div>
            </div>
        </div>
    );
};

export default ChefRecipes;