// Basics(If, For..loop)
// 1) Write a function that takes an array of booleans and an index(number) and returns the value of the boolean at that index.

const boolArray = [false, true, true, false]
boolArray[2]

const getBooleanValue = (arr, i) => {
    console.log("undefined error:", arr.length < i || i === undefined) 
    console.log("lunghezza array:", arr.length)
    if(arr.length <= i || i === undefined) {    
    console.log("undefined error 2:", arr.length < i || i === undefined)
        return "index error"
    } else {

        return arr[i]
    }
}

// console.log(getBooleanValue(boolArray,0))
// console.log(getBooleanValue(boolArray,1))
// console.log(getBooleanValue(boolArray,2))
// console.log(getBooleanValue(boolArray,3))
console.log(getBooleanValue(boolArray,4))



