import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <section className="bg-gray-100 rounded-xl mx-8 mt-6 p-8 flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-5xl  font-bold text-gray-800 mb-4">
                    Books to freshen up<br />your bookshelf
                </h2>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-md">
                    View The List
                </button>
            </div>

            {/* Book Image */}
            <div>
                <img
                    src={bookImage}
                    alt="The Dating Playbook For Men"
                    className="  drop-shadow-lg"
                />
            </div>
        </section>
    );
};

export default Banner;
