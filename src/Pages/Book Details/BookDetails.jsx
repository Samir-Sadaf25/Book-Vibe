import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToLocalStorage } from '../../Utility/AddToDB';

const BookDetails = () => {

    const { id } = useParams();
    const bookID = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookID);
    // console.log(singleBook);
    const { bookName,category, image, author, rating, tags, review,publisher, totalPages, yearOfPublishing } = singleBook;
    // console.log(singleBook)

    const handleMarkAsRead = (id) =>{
        addToLocalStorage(id);
    }

    return (
        <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-xl shadow-md">
            {/* Book Image */}
            <div className="flex-shrink-0">
                <img
                    src={image} // Replace with actual image path
                    alt="Book Cover"
                    className="w-48 h-auto object-contain mx-auto"
                />
            </div>

            {/* Book Info */}
            <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-1">{bookName}</h2>
                <p className="text-gray-600 mb-1">By : {author}</p>
                <p className="text-gray-700 font-medium mb-4">{category}</p>

                <p className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold">Review :</span>{review}
                </p>
                

                {/* Tags */}
                <div className="mb-4">
                    <span className="text-sm font-medium mr-2">Tag</span>
                    {
                        tags.map((tag, idx) => <span key={idx} className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full">
                            {tag}
                        </span>)
                    }

                </div>

                {/* Extra Info */}
                <div className="text-sm text-gray-700 space-y-1 mb-4">
                    <p>
                        <span className="font-medium">Number of Pages:</span> {totalPages}
                    </p>
                    <p>
                        <span className="font-medium">Publisher:</span>{publisher}
                        <span className="font-semibold">J.B Lippincott &amp; Co.</span>
                    </p>
                    <p>
                        <span className="font-medium">Year of Publishing:</span> {yearOfPublishing}
                    </p>
                    <p>
                        <span className="font-medium">Rating:</span> {rating}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                <button onClick={() => handleMarkAsRead(id)} className="btn btn-outline btn-accent">Mark as Read</button>
                <button className="btn btn-accent btn-outline">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;