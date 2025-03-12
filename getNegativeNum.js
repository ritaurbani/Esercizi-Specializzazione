// 3) Write a function that takes a number and return the negative version of that number.

//DOMANDA = altre possibili soluzioni??

const getNegativeNum = (num) => {
  if(num > 0) {
    return num - (num*2)
} else {
    return num
}
}

console.log(getNegativeNum(-7))
