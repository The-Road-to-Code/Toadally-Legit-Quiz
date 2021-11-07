import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-20 bg-cream">
            <h1 className="m-10 font-black font-Quicksand lg:text-6xl sm:text-3xl text-2xl">
                Welcome to Toadally Legit Quiz
            </h1>
            <section className="flex flex-col justify-center items-center">
                <img
                    src="https://res.cloudinary.com/dyefz2bep/image/upload/v1636241879/frogs/Swing-Frog.png"
                    alt="car-frog"
                    className="rounded-lg shadow-xl "
                />
                <p className="m-10 font-Mon">
                    What is your new favorite Hoppy? Come find out with this
                    super accurate, highly scientific quiz. Once you find your
                    spirit sad frog, learn about all the new hoppys you can try
                    with all off your new froggy friends. Then post your results
                    on Twitter to expand your frog community!
                </p>
            </section>
            <Link
                className=" font-Quicksand  mt-10 py-6 px-10 bg-green rounded-full text-3xl hover:bg-green transition duration-300 ease-in-out flex items-center animate-bounce"
                to="/quiz"
            >
                Start Quiz
            </Link>
        </div>
    );
};

export default Main;
