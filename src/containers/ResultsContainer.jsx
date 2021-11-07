import React, { useContext } from 'react';
import { getFrog, getToadals } from '../utils/quiz-results-helpers';
import frogs from '../data/frogs';
import TwitterButton from '../components/Results/TwitterButton';
import { ResultsContext } from '../hooks/ResultsContextProvider';

export function ResultsContainer() {
    const { answers, questions, history, clearAnswers } = useContext(ResultsContext);
    const totalsArr = getToadals(answers, questions);
    const frog = getFrog(totalsArr, frogs);

    return (
        <>
            <div className="flex justify-center p-10">
                <div className="flex flex-col max-w-3xl rounded shadow-lg h-full w-full p-10">
                    <img className="w-full" src={frog.url} alt={frog.name} />
                    <p className="p-5">{frog.summary}</p>
                    <ul className="p-5">
                        {frog.suggestedHobbies.map((hobby) => (
                            <li key={hobby.hobby}>
                                <a href={hobby.url}>{hobby.hobbyType}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="w-22">
                        <TwitterButton frog={frog} />
                        <br/>
                        <button onClick={() => {
                                clearAnswers();
                                history.push('/');
                            }}
                        >Retake the Quiz</button>
                    </div>
                </div>
            </div>
        </>
    );
}
