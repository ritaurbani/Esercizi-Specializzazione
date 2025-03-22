// replaceNegatives *: Replace negatives with 0.
//     [-1, 2].map(replaceNegatives) →[0, 2]


const replaceNegatives = (arr) => {
    return arr.map((elem) => elem < 0 ? 0 : elem)
}

console.log(replaceNegatives([-1,2,-3,-4]))