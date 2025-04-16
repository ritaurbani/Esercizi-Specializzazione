// (MEDIUM / HARD)9. * deepClone *: Create a deep copy of an object.
//         deepClone({ data: [1, 2] }) → { data: [1, 2] }  

const deepClone = (obj) => {
    const objCopy = structuredClone(obj)
    return objCopy
}

console.log(deepClone({ data: [1, 2] }))