import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import useQuiz from '../../hooks/useQuiz';
import RadioOption from './RadioOption';

function Answers({ values, toadValues }) {
    const [answers, setAnswers] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('answers: ', answers);
    };

    const handleAnswer = (e) => {
        const { value } = e.target;
        setAnswers((prev) => [...prev, { value }]);
        console.log('selectedAnswer: ', value);
    };

    console.log(toadValues);
    return (
        <form onSubmit={handleSubmit}>
            {values.map((ans, idx) => (
                <RadioOption
                    answer={ans}
                    onChange={handleAnswer}
                    key={idx}
                    value={idx}
                />
            ))}
            <button>Submit</button>
        </form>
    );
}

Answers.propTypes = {
    toadValues: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
        .isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Answers;
