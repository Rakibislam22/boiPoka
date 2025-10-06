import React from 'react';
import { Star } from 'lucide-react';

const Book = ({ sData }) => {
    const {image, bookName, author, rating, tags, category } = sData
    return (
        <div className='space-y-5 p-6 border-1 border-[#13131326] rounded-2xl'>
            <div className='px-20 py-6 bg-[#F3F3F3] rounded-xl flex justify-center items-center'>
                <img className='w-35' src={image} alt="" />
            </div>

            <div className='flex items-center gap-3 text-[#23BE0A] font-medium'>
                {
                    tags.map( t => <p className='bg-[#23be0a0d] px-4 py-2 rounded-3xl'>{t}</p>)
                }
                
            </div>

            <div className='font-medium border-b-1 border-dashed border-[#13131326] space-y-3 '>
                <p className=' text-[#131313] text-3xl font-bold playfair-font'>{bookName}</p>
                <p className='text-[#131313cc] pb-3 '>By : {author}</p>
            </div>
            <div className='text-[#131313cc] font-medium flex justify-between items-center'>
                <div>
                    <p>{category}</p>
                </div>
                <div className='flex justify-center gap-3 items-center'>
                    <p>{rating}</p>
                    <Star></Star>
                </div>
            </div>
        </div>
    );
};

export default Book;