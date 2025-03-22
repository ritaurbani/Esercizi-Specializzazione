// reverseNumber *: Reverse digits of a number.
// reverseNumber(123) → 321

// 123 = 321
// -100 = 001 negative numbers behaves same way as positives
//1 digit number returns number

//1.turn number to array
//2.print starting from last element
const reverseNumber = (num) => {
    const arr = num.toString().split("")
    const revArray = []
    for(let i=arr.length-1; i>=0; i--) {
        const curNum = arr[i]
        revArray.push(curNum)
        console.log("newArray",revArray)
        
    }
    return Number(revArray.join(""))
    console.log("revArray", revArray)

}



console.log(reverseNumber(789))
