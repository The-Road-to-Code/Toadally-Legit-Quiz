import PropTypes from 'prop-types';
import React from 'react';

function RadioOption({ answer, onChange }) {
    return (
        <li>
            <button onClick={onChange}>{answer}</button>
        </li>
    );
}

RadioOption.propTypes = {
    answer: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default RadioOption;
