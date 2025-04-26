// (MEDIUM)  10. * toCamelCase *: Convert hyphenated string to camelCase.
//                 toCamelCase("hello-world") → "helloWorld"

// + word.slice(1)

// split("-") the string into words.

// Keep the first word as it is.

// For every next word:

// Make the first letter uppercase.

// Keep the rest of the word as it is.

// Join all together!

const toCamelCase = (str) => {
//    const hy = str.charAt(str.indexOf("-") +1).toUpperCase()
//     console.log(hy)
    // const half = str.split("-")[1].charAt(0).toUpperCase()  
    // console.log("result",half)
    const halfs = str.split("-")
    const firstHalf = halfs[0]
    const secHalf = halfs.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1) )
    const allTogether = firstHalf +" " + secHalf.join(" ")

    console.log("secondWord",secHalf)  
    console.log("firstWord",firstHalf)  
    return allTogether

}

console.log(toCamelCase("hello-world"))
