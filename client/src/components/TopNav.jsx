import React from 'react';
import { Link } from 'react-router-dom';

export default function TopNav() {
    const scrollToTop = () => window.scrollTo(0, 0);

    return (
        <nav className="absolute top-0 w-full z-50 pointer-events-none">
            <div className="max-w-7xl mx-auto px-6 py-6 flex justify-end gap-6 pointer-events-auto">
                <Link
                    to="/blog"
                    onClick={scrollToTop}
                    className="text-sm text-gray-400 hover:text-fantasy-gold transition duration-200"
                >
                    Blog
                </Link>
                <Link
                    to="/ideas"
                    onClick={scrollToTop}
                    className="text-sm text-gray-400 hover:text-fantasy-gold transition duration-200"
                >
                    Ideas
                </Link>
            </div>
        </nav>
    );
}
