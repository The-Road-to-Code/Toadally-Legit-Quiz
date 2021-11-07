import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import questions from '../data/questions.json';

export const ResultsContextProvider = ({ children }) => {
    const [answers, setAnswers] = useState([]);
    const history = useHistory();

    const handleAnswer = (value) => {
        if (answers.length + 1 === questions.length) {
            setAnswers((prev) => [...prev, value]);
            history.push('/results');
        } else {
            setAnswers((prev) => [...prev, value]);
        }
    };

    const clearAnswers = () => {
        setAnswers([]);
    };

    const state = {
        answers,
        questions,
        handleAnswer,
        clearAnswers,
        history,
    };

    return (
        <ResultsContext.Provider value={state}>
            {children}
        </ResultsContext.Provider>
    );
};

ResultsContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const ResultsContext = createContext();
