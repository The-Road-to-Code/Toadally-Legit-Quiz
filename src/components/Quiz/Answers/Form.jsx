import React from 'react';
import useQuiz from '../../../hooks/useQuiz';
import RadioOption from './RadioOption';

function Form() {
    const { handleChange, questions, onSubmit } = useQuiz();
    return (
        <form onSubmit={onSubmit}>
            {questions.map((question) => (
                <RadioOption
                    question={question}
                    key={question[`${question.answer}-${question.id}`]}
                    onChange={handleChange}
                />
            ))}
        </form>
    );
}

export default Form;
