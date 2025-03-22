// (EASY) 6. *findInRange*: Find first number between 10-20.  
//    findInRange([5, 15, 25]) → 15  

const findInRange = (arr) => {
    return arr.find((elem) => elem >=10 && elem <= 20)
}


console.log(findInRange([5,15,25]))