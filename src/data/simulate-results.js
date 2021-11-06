const fakeResults = [0, 3, 1];

function getToadals(resultsArr, questions) {
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

function getFrog(totalsArr, frogsArr) {
    const max = Math.max(...totalsArr);
    const frogIndex = totalsArr.indexOf(max);
    return frogsArr[frogIndex];
}

// should return 7

const totalsArr = getToadals(fakeResults, questions);
console.log(getFrog(totalsArr, frogs));
