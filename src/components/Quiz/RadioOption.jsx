import PropTypes from 'prop-types';
import React from 'react';

function RadioOption({ answer, idx, onChange }) {
    return (
        <label htmlFor={answer}>
            <input
                id={answer}
                type="radio"
                name={idx}
                value={answer} // toadValue for answer
                onChange={onChange}
            />
            {answer}
        </label>
    );
}

RadioOption.propTypes = {
    answer: PropTypes.string,
    idx: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    userChoice: PropTypes.string,
};

export default RadioOption;
