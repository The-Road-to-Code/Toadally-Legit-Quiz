import React from 'react';
import Answers from '../components/Quiz/Answers';
// import Question from '../components/Quiz/Question.jsx';
// import useQuiz from '../hooks/useQuiz';
import questions from '../data/questions';

function QuizContainer() {
    return (
        <section>
            {questions.map((quest, idx) => (
                // <Question key={idx} questionObject={quest} />
                <article key={idx}>
                    <h3>{quest.question}</h3>
                    <Answers answers={quest.answers} />
                </article>
            ))}
        </section>
    );
}

export default QuizContainer;
