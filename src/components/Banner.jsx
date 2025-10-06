import React, { Suspense } from 'react';
import Bannerimg from '../assets/image.png';
import Books from './books/Books';

const booksPromise = fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json')
    .then(res => res.json());

const Banner = () => {

    return (
        <>
            <div className='flex justify-between items-center my-15 lg:mx-auto mx-3 lg:py-34 lg:px-30 py-10 px-8 bg-[#1313130d] rounded-3xl'>
                <div >
                    <p className='lg:text-6xl text-2xl font-bold playfair-font' >Books to freshen up your bookshelf</p>
                    <button className='btn py-5 px-7 bg-[#23BE0A] hover:bg-[#1c9908] text-white  rounded-lg mt-8' >View The List</button>
                </div>
                <div className='w-80'><img src={Bannerimg} alt="" /></div>
            </div>

            <Suspense fallback={
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
                    <div className="w-14 h-14 border-4 border-[#23BE0A] border-t-transparent rounded-full animate-spin mb-5"></div>

                    <p className="text-lg tracking-wide text-gray-300 animate-pulse">
                        Loading Book Vibe...
                    </p>
                </div>
            }>
                <Books booksPromise={booksPromise} ></Books>
            </Suspense>

        </>

    );
};

export default Banner;