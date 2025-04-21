
// (MEDIUM) 3. *extractValues*: Return array of object values.
//    extractValues({x: 10, y: 20}) → [10, 20]  

const extractValues = (obj) => {
 resultArr = []
 for(let key in obj){
    const elem = obj[key]
    resultArr.push(elem)
 }

 return resultArr
}

console.log(extractValues({x: 10, x: 20}) )
