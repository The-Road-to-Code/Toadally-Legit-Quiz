import PropTypes from 'prop-types';
import React from 'react';
// import useQuiz from '../../hooks/useQuiz';
import RadioOption from './RadioOption';

function Answers({ values }) {
    // const { handleChange, handleSubmit } = useQuiz();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
    };

    const handleAnswer = (e) => {
        const { name, value } = e.target;
        console.log('selectedAnswer: ', `${name}: ${value}`);
        console.log('====================================');
        console.log('Option: ', e.target);
        console.log('====================================');
    };

    return (
        <form onSubmit={handleSubmit}>
            {values.map((ans, idx) => (
                <RadioOption answer={ans} onChange={handleAnswer} key={idx} />
            ))}
            <button>Submit</button>
        </form>
    );
}

Answers.propTypes = {
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Answers;
