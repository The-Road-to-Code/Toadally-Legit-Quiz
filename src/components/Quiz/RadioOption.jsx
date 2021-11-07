import PropTypes from 'prop-types';
import React from 'react';

function RadioOption({ answer, onChange }) {
    return (
        <label htmlFor="quizAnswer">
            <input
                id={answer}
                type="radio"
                name="quizAnswer"
                value={answer} // toadValue for answer
                onChange={onChange}
            />
            {answer}
        </label>
    );
}

RadioOption.propTypes = {
    answer: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default RadioOption;
