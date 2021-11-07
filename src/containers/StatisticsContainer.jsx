import React, { useState, useEffect } from 'react';
import frogData from '../data/frogs.json';
import { supabase } from '../utils/supabase';

const StatisticsContainer = () => {
    const [frogsArray, setFrogsArray] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await supabase.from('frogs').select();
            setFrogsArray(data);
        })();
    }, []);

    const count = frogsArray.reduce((acc, curr) => {
        if (!acc[curr['frogname']]) acc[curr['frogname']] = 1;
        else acc[curr['frogname']] += 1;

        return acc;
    }, {});

    return (
        <>
            <h1>Global Frog Leaderboard</h1>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '90vw',
                    height: '90vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {frogData.map((frog) => (
                    <figure key={frog.name}>
                        <img
                            src={frog.url}
                            alt={frog.name}
                            style={{ width: '200px', margin: '5px' }}
                        />
                        <figcaption>
                            {frog.name} Frog Total: {count[frog.name]}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </>
    );
};

export default StatisticsContainer;
