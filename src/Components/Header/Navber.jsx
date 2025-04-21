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
                    <button className="btn btn-outline btn-accent">
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
                    <button className="btn btn-accent">
                        Sign In
                    </button>
                    <button className="btn btn-accent">
                        Sign Up
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navber;