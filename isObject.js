// isObject *: Check if a value is an object.
// isObject({}) → true


const isObject = (value) => {
//    return (typeof value === 'object')? true : false
   return (Array.isArray(value))? true : false


   //DOMANDA se ho if con due return non ho bisogno di altri?

// if(value === typeof Object){
//     return true
// }else{
//     return false
// }

}

console.log(isObject([])) 