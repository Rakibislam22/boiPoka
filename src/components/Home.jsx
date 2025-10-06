import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className='lg:w-[1280px] mx-auto'>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Home;