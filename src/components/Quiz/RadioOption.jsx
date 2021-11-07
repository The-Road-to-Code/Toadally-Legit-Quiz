import PropTypes from 'prop-types';
import React from 'react';

function RadioOption({ answer, value, onChange }) {
    return (
        <label htmlFor="quizAnswer">
            <input
                id={value}
                type="radio"
                name="quizAnswer"
                value={value} // toadValue for answer
                onChange={onChange}
            />
            {answer}
        </label>
    );
}

RadioOption.propTypes = {
    answer: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number,
};

export default RadioOption;
