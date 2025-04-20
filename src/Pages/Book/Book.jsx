import React from 'react';
import { Star } from "lucide-react";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {

    const { bookName, bookId, image, author, rating, tags } = singleBook;
    // console.log(singleBook);
    return (
        <Link to={`/BookDetails/:${bookId}`}>
            <div className=" bg-white rounded-xl shadow-md p-4 border border-gray-200">
                <div className="bg-gray-100 rounded-xl p-4 flex justify-center items-center">
                    <img
                        src={image}
                        alt="Book Cover"
                        className="w-[150px] object-contain"
                    />
                </div>

                <div className="flex gap-2 mt-4">
                    {
                        tags.map((tag, idx) => <span key={idx} className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full">
                            {tag}
                        </span>)
                    }
                </div>

                <h2 className="text-lg font-semibold mt-4">{bookName}</h2>
                <p className="text-sm text-gray-500 font-semibold">By : {author} </p>

                <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center text-sm text-gray-700">
                    <span>Fiction</span>
                    <span className="flex items-center gap-1">
                        {rating}
                        <Star className="w-4 h-4 fill-current text-gray-400" />
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default Book;