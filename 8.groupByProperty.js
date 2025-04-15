// (MEDIUM / HARD) 10. * groupByProperty *: Group objects by a property(e.g., "age").
//     javascript
// groupByProperty([{ age: 20 }, { age: 20 }], "age")
//     → { 20: [{ age: 20 }, { age: 20 }] }


const groupByProperty = (arr, keyP) => {
    const newArr = []
    const newObj = {}
    arr.forEach((obj) => { 
        for (let key in obj) {
            if (obj[key] === obj[keyP]) {
                console.log(obj[key])
                console.log(obj[keyP])
                newArr.push(obj)
            }
        }
        return newArr
        console.log("check", newArr)
    })

    newObj[obj[keyP]]: newArr

    return newObj

}


console.log(groupByProperty([{ age: 20 }, { age: 20 }], "age"))



