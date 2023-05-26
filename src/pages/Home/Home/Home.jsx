import React from 'react';
import Banner from '../../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';
import Shop from '../Shop/Shop';
import WhoAreWe from '../WhoAreWe/WhoAreWe';

const Home = () => {
    const chefs = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Chefs chefs={chefs}></Chefs>
            <Shop></Shop>
            <WhoAreWe/>
        </div>
    );
};

export default Home;