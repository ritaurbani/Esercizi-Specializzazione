
// multiplicationTable *: Generate table for a number.
// multiplicationTable(3) → "3x1=3,3x2=6,3x3=9"


const multiplicationTable = (n) => {
    let arr = [];
    
    for(let i=1; i<= n; i++) {
        const curNum = i;
        const result = n*curNum 
        const string = `${n}x${curNum}=${result}`
        arr.push(string)      
    }
    return arr.join(",")
}

// multiplicationTable(1) //"1x1=1"
// multiplicationTable(2) //"2x1=2, 2X2=4"
// multiplicationTable(-1) //"error: only positive numbers"
console.log(multiplicationTable(4))

