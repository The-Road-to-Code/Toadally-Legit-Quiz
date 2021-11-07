export function getToadals(resultsArr, questions) {
    console.log('====================================');
    console.log('resultsArr-toadals', resultsArr);
    console.log('====================================');
    let toadValuesLength = questions[0].toadValues[0].length;
    let toadals = new Array(toadValuesLength).fill(0);

    resultsArr.forEach((answer, i) => {
        // get the toadValues array corresponding to answer index
        const toadValues = questions[i].toadValues[answer];
        toadValues.forEach((value, i) => {
            toadals[i] += value;
        });
    });

    return toadals;
}

export function getFrog(totalsArr, frogsArr) {
    console.log('====================================');
    console.log('totalsArr: ', totalsArr);
    console.log('====================================');
    const max = Math.max(...totalsArr);
    const frogIndex = totalsArr.indexOf(max);
    return frogsArr[frogIndex];
}
