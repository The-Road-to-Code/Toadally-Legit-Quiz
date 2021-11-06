import PropTypes from 'prop-types';
import React from 'react';
import Answers from './Answers';

function Question({ question, answers }) {
    console.log('====================================');
    console.log('Question: ', question, answers);
    console.log('====================================');
    return (
        <article>
            <h2>{question}</h2>
            <Answers answers={answers} />
        </article>
    );
}

Question.propTypes = {
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    question: PropTypes.string.isRequired,
};

export default Question;
