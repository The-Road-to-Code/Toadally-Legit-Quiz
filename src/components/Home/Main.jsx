import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-cream h-4/5">
            <h1 className="m-10 font-black font-Quicksand lg:text-6xl sm:text-3xl text-2xl tracking-widest">
                Toadally Legit Quiz!
            </h1>
            <section className="flex flex-col justify-center items-center">
                <img
                    src="https://res.cloudinary.com/dyefz2bep/image/upload/v1636241879/frogs/Swing-Frog.png"
                    alt="swing-frog"
                    className="rounded-lg shadow-xl border-4 border-pink border-dotted"
                />
                <h3 className="m-10 font-Montserrat text-2xl font-bold">
                    What is your new favorite Hoppy?{' '}
                </h3>
                <h4 className="w-auto font-Montserrat mx-5 mb-3">
                    Come find out with this super accurate, highly scientific
                    quiz. Once you find your spirit frog, you can learn about
                    all the new hoppys to do with all of your new froggy
                    friends.
                </h4>
                <h3 className="mt-3 font-Montserrat font-bold">
                    Post your results on Twitter to expand your frog community!
                </h3>
                <div className="pb-2">
                    <Link
                        className=" font-Quicksand hover:text-white mt-10 py-6 px-10 bg-gradient-to-r from-mint to-blue-500 hover:from-pink rounded-full text-3xl transition duration-300 ease-in-out flex items-center animate-bounce"
                        to="/quiz"
                    >
                        Start Quiz
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Main;
