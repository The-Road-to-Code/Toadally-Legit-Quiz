import React from 'react';
import Question from '../components/Quiz/Question.jsx';
// import useQuiz from '../hooks/useQuiz';
import questions from '../data/questions';

function QuizContainer() {
    console.log(questions);
    return (
        <section>
            {questions.map((quest, idx) => (
                <Question key={`${quest.id}-${idx}`} quest={quest} />
            ))}
        </section>
    );
}

export default QuizContainer;
