// 7. * countProperties *: Count the number of properties.
//     countProperties({}) → 0 


const countProperties = (obj) => { //return Object.keys(obj).length - coprire caso in cui e undefined(if not object retorna 0)
    keyLength = []
    for (let key in obj ) {
        keyLength.push(key)
    }
    return keyLength.length
}



console.log(countProperties({age: 4, name: "anna"}))
console.log(countProperties(undefined))