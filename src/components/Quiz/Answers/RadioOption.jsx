import PropTypes from 'prop-types';
import React from 'react';

function RadioOption({ answer, onChange, userChoice }) {
    return (
        <label htmlFor={answer.id}>
            <input
                id={answer.id}
                type="radio"
                name="answer"
                value={answer}
                checked={userChoice === answer}
                onChange={onChange}
            />
        </label>
    );
}

RadioOption.propTypes = {
    answer: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    userChoice: PropTypes.string,
};

export default RadioOption;
