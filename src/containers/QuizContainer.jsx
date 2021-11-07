import React from 'react';
import useQuiz from '../hooks/useQuiz';

function QuizContainer() {
    const { questions, answers, handleAnswer } = useQuiz();

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
