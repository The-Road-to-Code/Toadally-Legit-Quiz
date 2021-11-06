import { useState } from 'react';
import questions from '../data/questions.json';

const useQuiz = () => {
    const [answers, setAnswers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setAnswers([...answers, e.target.value]);
    };

    const handleAnswer = (e) => {
        const { name, value } = e.target;
        setAnswers([...answers, { name, value }]);
    };

    return {
        questions,
        answers,
        handleSubmit,
        handleAnswer,
    };
};

export default useQuiz;
