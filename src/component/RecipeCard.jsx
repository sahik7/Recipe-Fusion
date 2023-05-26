import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaBookmark, FaRegStar, FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipe }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const { cookingMethod, ingredients, rating, recipeName } = recipe;
    const notify = () => {
        setIsFavorite(true)
        toast.success("The recipe is your favorite Now", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    return (
        <div >
            <div className="p-8 border rounded-xl h-screen flex flex-col justify-between">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <h1 className="text-2xl border-l-2 pl-2 border-[#EA572B] font-bold">{recipeName}</h1>
                <div>
                    <h1 className="text-lg border-l-2 pl-2 border-[#F4C012] font-bold mt-14 text-gray-700">Ingredients</h1>
                    <ul className="list-disc ml-6 mt-3 text-gray-700">
                        {
                            ingredients.map(ingredient => <li>{ingredient}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h1 className="text-lg border-l-2 pl-2 mt-14 border-[#F4C012] font-bold text-gray-700">Cooking Method</h1>
                    <p className="ml-3 text-gray-600">{cookingMethod}</p>
                </div>
                <div className="flex items-center mt-10">
                    <p className="text-gray-500">Ratings:</p>
                    <Rating className="ml-2 mt-1 flex-grow" placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar className='text-[#F4C012]'></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-[#F4C012]' />}
                        fullSymbol={<FaStar className='text-[#F4C012]' />}></Rating>
                    <button onClick={notify} disabled={isFavorite} className='p-2 border rounded'><FaBookmark className={isFavorite ? "text-[#f39c81]" : "text-[#EA572B]"}/></button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;