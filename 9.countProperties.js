// 7. * countProperties *: Count the number of properties.
//     countProperties({}) → 0 


const countProperties = (obj) => {
    keyLength = []
    for (let key in obj ) {
        keyLength.push(key)
    }
    return keyLength.length
}



console.log(countProperties({age: 4, name: "anna"}))