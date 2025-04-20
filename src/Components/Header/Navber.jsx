import React from 'react';

const Navber = () => {
    return (
        <div>
            <nav className="flex items-center justify-between px-8 py-4 bg-white ">
                {/* Logo */}
                <div className="text-2xl font-bold text-black">
                    Book Vibe
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <button className="text-green-600 border border-green-600 px-4 py-1 rounded-md font-semibold">
                        Home
                    </button>
                    <button className="text-gray-700 hover:text-black">
                        Listed Books
                    </button>
                    <button className="text-gray-700 hover:text-black">
                        Pages to Read
                    </button>
                </div>

                {/* Auth Buttons */}
                <div className="flex space-x-4">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold">
                        Sign In
                    </button>
                    <button className="bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 rounded-md font-semibold">
                        Sign Up
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navber;