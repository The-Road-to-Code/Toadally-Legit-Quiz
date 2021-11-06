import React from 'react';
import question from '../../../data/questions.json';

function Question() {

    const query = question.map(item => {
        return item.question
    })

    return (
        <div>
            <h1>{query}</h1>
        </div>
    )
}

export default Question
