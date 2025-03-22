// incrementEvens *: Add 1 to even numbers.
//    [2, 3].map(incrementEvens) →[3, 3]

const incrementEvens = (arr) => {
    const newArr = arr.map((elem) => {
        if(elem % 2 === 0) {
            return elem + 1
        } else {
            return elem
        }
})
return newArr
}

console.log(incrementEvens([2,4,5,6]))