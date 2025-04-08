// (EASY) 4. *truncateString*: Truncate a string to n characters.
//    truncateString("abcdef", 3) → "abc..."  

function truncateString(string, num) {
    slicedStringa = string.slice(0,num)
    return slicedStringa
}

   console.log(truncateString("abcdef", 5))
