// (EASY) 8. * countSubstring *: Count occurrences of a substring.
//     countSubstring("ababa", "aba") → 2

const countSubstring = (string, substring) => {
    let counter = 0;
    const stringChars = string.split('')

    for (let i = 0; i < stringChars.length; i++) {
        const startSubstring = string.slice(i, i + substring.length)
        if (startSubstring === substring) {
            counter += 1;
        }
    }

    return counter;
};

//console.log(countSubstring("ababa", "aba"))
console.log(countSubstring("totorianortoitato", "to"))