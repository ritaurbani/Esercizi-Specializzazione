//  (MEDIUM) 7. *isArrayOfNumbers*: Check if all array elements are numbers.
//    isArrayOfNumbers([1, "2"]) → false  

// const isArrayOfNumbers = (arr) => {
//     arr.forEach((item) => {
//         if(typeof item === "number"){
//             return true
//         }
//     })
//     return false

// }

// const isArrayOfNumbers = (arr) => {
//     for (let i of arr){
//         if(typeof i !== "number"){
//             return false
//         }
//     }
//     return true
// }

const isArrayOfNumbers1 = (arr) => {
    return arr.every((n) => typeof n === "number")
}



isArrayOfNumbers1([1, "2"])