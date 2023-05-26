import React from 'react';
import IndividualChef from '../IndividualChef/IndividualChef';

const Chefs = ({chefs}) => {
    return (
        <div className='my-40'>
            <h1 className='font-black text-4xl text-center'>All the chefs</h1>
            <hr className="border-2 rounded border-[#EA572B] mx-auto w-1/12 mt-3"></hr>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto mt-20 gap-10'>
            {
                chefs.map(chef => <IndividualChef key={chef.id} chef={chef}/>)
            }
            </div>
        </div>
    );
};

export default Chefs;