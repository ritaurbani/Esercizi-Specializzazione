
// 2) Write a function that takes an array of booleans and returns the number of true values in the array.

//DOMANDA: count meglio dentro funzione o fuori come variabile globale?

const boolArray = [false, true, true, false, true]

const getTrueNumValue = (arr) => {
    count = 0;
    arr.forEach((item) => {
        if(item === true) {
            count++
        }
    })
    return count
}

console.log(getTrueNumValue(boolArray))












