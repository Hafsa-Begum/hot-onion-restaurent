import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Menu from '../Menu/Menu/Menu';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Menu></Menu>
            <Features></Features>
        </div>
    );
};

export default Home;