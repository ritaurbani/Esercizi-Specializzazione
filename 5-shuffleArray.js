// (MEDIUM) 9. *shuffleArray*: Randomly shuffle array elements.  
//    shuffleArray([1, 2, 3]) → [3, 1, 2] 


const shuffleArray = (arr) => {
   const shuffledArray = []
   for(let i=0; i < arr.length; i++){
    const shuffledDigit = Math.floor(Math.random()*arr.length)+1
    console.log(shuffledDigit)
    shuffledArray.push(shuffledDigit)
   }
console.log(shuffledArray)
    return shuffledArray
}


console.log(shuffleArray([1, 2, 3]))