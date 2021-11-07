import React from 'react';
import frog1 from '../../../assets/froggy1.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="flex justify-between bg-babyblue items-center h-15 bg-white text-black relative shadow-sm sticky top-0">
            <Link to="/" className="pl-8">
                <img src={frog1} alt="sad frog in rain" className="h-14" />
            </Link>

            <div className="pr-8">
                <Link className="p-4 font-Quicksand font-bold" to="/Statistics">
                    Frog Leaderboard
                </Link>
                <Link className="p-4 font-Quicksand font-bold" to="/about">
                    About Us
                </Link>
            </div>
        </nav>
    );
};

export default Header;
