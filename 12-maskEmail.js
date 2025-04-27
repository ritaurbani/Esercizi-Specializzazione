// (MEDIUM) 7. * maskEmail *: Mask part of an email(e.g., "te**@example.com").
//         maskEmail("test@example.com") → "te**@example.com"

//TO DO 

//masking according to string length (lenght/2 should be masked)

//masking according to a second parameter > masked maskedChars 

const maskEmail = (email) => {
    //check string length
    //round(length/2)
    const [name, domain] = email.split("@")
    const removedLastTwoLetetrs = name.slice(0, name.length-2)
    const maskedWord = removedLastTwoLetetrs + "**"
    const joined = [maskedWord, domain].join("@")
    return joined

}

console.log("**test**")
console.log(maskEmail("dito@example.com"))
console.log(maskEmail("caffe@example.com"))
