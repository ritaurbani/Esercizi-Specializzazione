// (EASY) 8. *findVowel*: Find first string containing a vowel.
//    findVowel(["xyz", "aei"]) → "aei"  

const findVowel = (arr) => {  
    const vowels = "aeiou"

    const result = arr.find((elem) => 
        
        vowels.includes(elem)
       
    ) 
    return result   
}



console.log(findVowel(["xyz", "aei"]))