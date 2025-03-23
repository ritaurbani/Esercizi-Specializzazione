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

//Se vuoi cercare lettere in una parola, devi usare .split(""):

//PROBLEMA X elem e'una parola intera, noi dobbiamo controllare singola lettera

/////////////CICLO FOR///////////////

// const findVowel = (arr) => {
//     const vowels = "aeiou"; // Stringa con le vocali

//     return arr.find((word) => {
//         for (let i = 0; i < word.length; i++) {
//             if (vowels.includes(word[i])) {
//                 return true; // Trovata una vocale → la parola va bene
//             }
//         }
//         return false; // Nessuna vocale trovata
//     });
// };

// console.log(findVowel(["xyz", "aei"])); // "aei"
// console.log(findVowel(["bcd", "fgh", "pqrs"])); // undefined

//////ALTRA OPZIONE////////

// const findVowel = (arr) => {
//     const vowels = "aeiou";

//     return arr.find((word) => //cerco prima parola con almeno una vocale
//         word.split("").find(letter => vowels.includes(letter))
//     );
// };

// console.log(findVowel(["xyz", "aei"])); // "aei"
