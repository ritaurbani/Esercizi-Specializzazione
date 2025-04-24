// (MEDIUM) 9. * removePunctuation *: Remove punctuation from a string.
//         removePunctuation("Hello!") → "Hello"

const removePunctuation = (string) => {
    const punctuation = ".,?!:;"
    const newPunctuation = punctuation.split("")
    let newArr;
    newPunctuation.forEach((p)=> {
    newArr = string.split("").filter((elem) => elem !== p)
    console.log("controllo",newArr)

})
return newArr}

console.log(removePunctuation("Hello!"))