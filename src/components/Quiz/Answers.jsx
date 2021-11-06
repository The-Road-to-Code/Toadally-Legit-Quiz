import PropTypes from 'prop-types';
import React from 'react';
// import useQuiz from '../../hooks/useQuiz';
import RadioOption from './RadioOption';

function Answers({ answers }) {
    // const { handleChange, handleSubmit } = useQuiz();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
    };

    const handleAnswer = (e) => {
        const { name, value } = e.target;
        console.log('selectedAnswer: ', `${name}: ${value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            {answers.map((ans, idx) => (
                <RadioOption
                    answer={ans}
                    onChange={handleAnswer}
                    key={idx}
                    id={idx}
                />
            ))}
            <button>Submit</button>
        </form>
    );
}

Answers.propTypes = {
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Answers;
