// longStrings *: Filter strings longer than 5 chars.
//    ["hi", "hello"].filter(longStrings) →["hello"]


// const longStrings = (arr) => {
//     const newArr = arr.filter((str) => str.length > 5)
//     return newArr
// }

// console.log(longStrings(["ciao","satshriakal","goodmorning", "nihao"]))

const longStrings = (arr) => {
    let newArr=[]
    newArr.push(arr.find((str) => str.length > 5))
    return newArr
}

console.log(longStrings(["ciao", "satshriakal", "goodmorning", "nihao"]))