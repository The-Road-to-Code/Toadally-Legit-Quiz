import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="flex flex-col justify-center items-center h-34">
            <h1>Welcome to Todally Legit Quiz</h1>
            <section className="">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates doloribus sunt nulla assumenda totam? Praesentium
                    voluptates labore quos, inventore, odio debitis et quae
                    voluptatem suscipit corporis nobis tenetur quia esse.
                </p>
            </section>
            <Link
                className="rounded-lg px-4 py-2 bg-green-700 text-green-100"
                to="/quiz"
            >
                Start Quiz
            </Link>
        </div>
    );
};

export default Main;
