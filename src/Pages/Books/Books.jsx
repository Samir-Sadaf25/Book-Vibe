import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    return (
        <div>
            <h1 className='text-center mb-10 text-4xl font-semibold mt-10'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <Suspense fallback={<span>Loading.....</span>}>
                    {
                        data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Books;