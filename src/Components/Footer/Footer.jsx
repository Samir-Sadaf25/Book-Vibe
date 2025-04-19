import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-10">
                <div className="container mx-auto px-4">
                    <p className="mb-2 font-semibold">Book Vibe</p>
                    <p className="mb-2">Bringing stories closer to you, one page at a time.</p>
                    <p>&copy; {new Date().getFullYear()} Book Vibe. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;