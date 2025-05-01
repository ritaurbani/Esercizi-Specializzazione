// (MEDIUM) 6. *countOccurrences*: Count occurrences of an element.
//    countOccurrences([1, 1, 2], 1) → 2  

const countOccurrences = (arr,elem) => {
    count = 0
    for(let e of arr) {
        if (e === elem){
            count++
        }
    }
    return count
}

console.log(countOccurrences([1,2,3], ))

module.exports = {
    countOccurrences
}
