import React from 'react';
import { Link } from 'react-router';

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
                    <Link to={'/'}><button className="btn btn-outline btn-accent">
                        Home
                    </button></Link>
                    <Link to={'/ReadList'}><button className="text-gray-700 hover:text-black btn btn-outline btn-accent">Listed Books</button></Link>
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