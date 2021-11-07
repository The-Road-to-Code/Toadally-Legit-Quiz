import PropTypes from 'prop-types';
import React from 'react';
import Answers from './Answers';

function Question({ quest }) {
    const { question, answers, toadValues } = quest;
    return (
        <article>
            <h3>{question}</h3>
            <Answers values={answers} toadValues={toadValues} />
        </article>
    );
}

Question.propTypes = {
    quest: PropTypes.shape({
        answers: PropTypes.arrayOf(PropTypes.string),
        id: PropTypes.string,
        question: PropTypes.string,
        toadValues: PropTypes.arrayOf(PropTypes.number),
    }),
};

export default Question;
