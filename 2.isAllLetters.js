
// (MEDIUM) 6. *isAllLetters*: Check if a string contains only letters.
//    isAllLetters("abc123") → false 

const isAllLetters = (str) => {
   const numbers = [1,2,3,4,5,6,7,8,9,0]
    for(let num of numbers){
        if (str.includes(num)){
            return false
        }
    }
    return true
    };


   console.log(isAllLetters("abc123"))
