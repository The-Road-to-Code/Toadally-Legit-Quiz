import React, { useContext } from 'react';
import { ResultsContext } from '../hooks/ResultsContextProvider';

function QuizContainer() {
    const { answers, questions, handleAnswer } = useContext(ResultsContext);

    return (
        <section>
            <article className=" h-screen">
                <h3 className="flex flex-col justify-center items-center text-center font-Montserrat m-12 font-black font-Quicksand lg:text-4xl sm:text-3xl text-2xl">
                    {questions[answers.length].question}
                </h3>
                <div className="grid grid cols-2 gap-12 mt-6 flex flex-col justify-center items-center">
                    <ul
                        className=" bg-cream grid shadow-md   grid-cols-2 grid-rows-2 gap-x-3 gap-y-3 grid-flow-col w-auto h-auto p-6 text-white-800 text-lg font-bold font-Quicksand"
                        id="answers"
                    >
                        {questions[answers.length].answers.map(
                            (answer, idx) => (
                                <li
                                    className="rounded-lg px-5 py-5 bg-gradient-to-r from-mint to-blue-500 text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 p-6 m-2 flex flex-col justify-center items-center"
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                >
                                    {answer}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </article>
        </section>
    );
}

export default QuizContainer;
