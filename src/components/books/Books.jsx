import React, { use } from 'react';
import Book from './Book';

const Books = ({ booksPromise }) => {
    const data = use(booksPromise);

    return (
        <div>
            <h1 className='text-5xl font-bold playfair-font text-center py-7'>Books</h1>
            <div className='py-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mx-auto mx-3'>
                {
                    data.map(sData => <Book key={sData.bookId} sData={sData}></Book>)
                }
            </div>

        </div>
    );
};

export default Books;