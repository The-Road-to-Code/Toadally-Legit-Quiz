import React, { useContext } from 'react';
import { ResultsContext } from '../hooks/ResultsContextProvider';

function QuizContainer() {
    const { answers, questions, handleAnswer } = useContext(ResultsContext);

    return (
        <section>
            <article>
                <h3 className="m-12">{questions[answers.length].question}</h3>
                <ul id="answers">
                    {questions[answers.length].answers.map((answer, idx) => (
                        <li key={idx} onClick={() => handleAnswer(idx)}>
                            {answer}
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
}

export default QuizContainer;
