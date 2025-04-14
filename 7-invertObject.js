// (MEDIUM/HARD) 5. *invertObject*: Swap keys and values.
//    invertObject({a: "x", b: "y"}) → {x: "a", y: "b"}  


const invertObject = (obj) => {
    let newObj = {}
    for(let key in obj){
        const value = obj[key]
        newObj = {
            value: key
        }
    }
    return newObj
}





console.log(invertObject({ a: "x", b: "y" }))