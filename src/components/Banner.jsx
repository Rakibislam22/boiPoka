import React from 'react';
import Bannerimg from '../assets/image.png';

const Banner = () => {
    return (
        <div className='flex justify-between items-center my-10 lg:mx-auto mx-3 lg:py-34 lg:px-30 py-10 px-8 bg-[#1313130d] rounded-3xl'>
            <div >
                <p className='lg:text-6xl text-2xl font-bold playfair-font' >Books to freshen up your bookshelf</p>
                <button className='btn py-5 px-7 bg-[#23BE0A] hover:bg-[#1c9908] text-white  rounded-lg mt-8' >View The List</button>
            </div>
            <div className='w-80'><img  src={Bannerimg} alt="" /></div>
        </div>
    );
};

export default Banner;