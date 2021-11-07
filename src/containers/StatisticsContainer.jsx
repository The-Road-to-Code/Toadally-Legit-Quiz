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
            <div className="container mx-auto mb-8 bg-cream">
                <h1 className="text-center font-Quicksand text-4xl mt-2">
                    Toadal Frogs By Hoppy:
                </h1>
                <div>
                    {frogData.map((frog) => (
                        <figure
                            className="flex flex-row justify-center items-center"
                            key={frog.name}
                        >
                            <img
                                src={frog.url}
                                alt={frog.name}
                                className="rounded-lg w-3/6 h-2/4 m-6 shadow-lg"
                            />
                            <figcaption className="font-Montserrat font-bold text-lg text-center">
                                {frog.name} Frog Toadal: {count[frog.name]}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </>
    );
};

export default StatisticsContainer;
