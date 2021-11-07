import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import questions from '../data/questions.json';

const useQuiz = () => {
    const [answers, setAnswers] = useState([]);
    const history = useHistory();

    const handleAnswer = (value) => {
        // setAnswers([...answers, value]);
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

    return {
        questions,
        answers,
        handleAnswer,
        clearAnswers,
    };
};

export default useQuiz;

// Question component

// const Questions = () => {
// const {answers, questions, handleAnswers } = useQuiz()

// return (
//<div>
// {questions[answers.length]}
// </div>
// <p onClick={() => handleAnswer(0)}>
//   {questions[answers.length].answers[0]}
// </p>
// <p onClick={() => handleAnswer(1)}>
//   {questions[answers.length].answers[1]}
// </p>
// <p onClick={() => handleAnswer(2)}>
//   {questions[answers.length].answers[2]}
// </p>
// <p onClick={() => handleAnswer(3)}>
//   {questions[answers.length].answers[3]}
// </p>
// )

// }
