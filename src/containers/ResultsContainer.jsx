import React, { useContext, useEffect } from 'react';
import { getFrog, getToadals } from '../utils/quiz-results-helpers';
import frogs from '../data/frogs';
import TwitterButton from '../components/Results/TwitterButton';
import { ResultsContext } from '../hooks/ResultsContextProvider';

export function ResultsContainer() {
    const { answers, questions, history, clearAnswers } =
        useContext(ResultsContext);
    const totalsArr = getToadals(answers, questions);
    const frog = getFrog(totalsArr, frogs);
    useEffect(() => {
        clearAnswers();
    }, [ResultsContainer]);

    return (
        <>
            <div className="flex justify-center p-10">
                <div className="flex flex-col max-w-3xl rounded shadow-lg h-full w-full p-10 bg-cream">
                    <img className="w-full" src={frog.url} alt={frog.name} />
                    <p className="p-5 font-Quicksand font-bold">
                        {frog.summary}
                    </p>
                    <ul className="p-5">
                        {frog.suggestedHobbies.map((hobby) => (
                            <li key={hobby.hobby}>
                                <a
                                    className="font-Montserrat hover:bg-blue-400 hover:text-white"
                                    href={hobby.url}
                                >
                                    {hobby.hobbyType}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="w-42 flex flex-wrap justify-center items-center space-x-8 mt-2">
                        <TwitterButton frog={frog} />
                        <button
                            className="rounded-lg px-5 py-5 bg-gradient-to-r from-mint to-blue-500 text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                            onClick={() => {
                                clearAnswers();
                                history.push('/');
                            }}
                        >
                            Retake the Quiz
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
