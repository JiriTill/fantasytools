import React from 'react';
import { Link } from 'react-router-dom';

export default function TopNav() {
    const scrollToTop = () => window.scrollTo(0, 0);

    return (
        <div className="absolute top-4 right-4 z-50 flex gap-4 text-sm md:text-base">
            <Link
                to="/blog"
                onClick={scrollToTop}
                className="text-fantasy-gold hover:text-white font-semibold transition drop-shadow-md"
            >
                Blog
            </Link>
            <Link
                to="/ideas"
                onClick={scrollToTop}
                className="text-fantasy-gold hover:text-white font-semibold transition drop-shadow-md"
            >
                Ideas
            </Link>
        </div>
    );
}
