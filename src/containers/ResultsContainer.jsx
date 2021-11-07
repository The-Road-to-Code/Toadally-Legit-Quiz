import React, { useContext } from 'react';
import { getFrog, getToadals } from '../utils/quiz-results-helpers';
import frogs from '../data/frogs';
// import { useHistory } from 'react-router-dom';

// import HobbiesList from '../components/Results/HobbiesList';
import TwitterButton from '../components/Results/TwitterButton';
import { ResultsContext } from '../hooks/ResultsContextProvider';

export function ResultsContainer() {
    const { answers, questions, history, clearAnswers } =
        useContext(ResultsContext);

    const totalsArr = getToadals(answers, questions);
    const frog = getFrog(totalsArr, frogs);
    // const history = useHistory();

    return (
        <>
            <div>
                <img src={frog.url} alt={frog.name} />
                <p>{frog.summary}</p>
                <ul>
                    {frog.suggestedHobbies.map((hobby) => (
                        <li key={hobby.hobby}>
                            <a href={hobby.url}>{hobby.hobbyType}</a>
                        </li>
                    ))}
                </ul>
                <div>
                    <TwitterButton frog={frog} />
                    <button
                        onClick={() => {
                            clearAnswers();
                            history.push('/');
                        }}
                    >
                        Retake Quiz
                    </button>
                </div>
            </div>
        </>
    );
}
