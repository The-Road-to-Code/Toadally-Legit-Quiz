import PropTypes from 'prop-types';
import React from 'react';
// import useQuiz from '../../hooks/useQuiz';
import RadioOption from './RadioOption';

function Answers({ values, toadValues }) {
    // const { handleChange, handleSubmit } = useQuiz();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
    };

    const handleAnswer = (e) => {
        const { name, value } = e.target;
        console.log('selectedAnswer: ', `${name}: ${value}`);
        console.log('Option: ', e.target);
    };

    console.log(toadValues);
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
    toadValues: PropTypes.arrayOf(PropTypes.number).isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Answers;
