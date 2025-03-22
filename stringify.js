// stringify *: Convert numbers to strings.
//    [5].map(stringify) →["5"]

const stringify = (arr) => {
    return arr.map((elem) => elem.toString())
}

console.log(stringify([5]))

// const numberfy = (arr) => {
//     return arr.map((elem) => Number(elem))
// }

// console.log(numberfy(["5"]))