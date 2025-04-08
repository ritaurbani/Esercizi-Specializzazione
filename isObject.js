// isObject *: Check if a value is an object.
// isObject({}) → true


const isObject = (value) => {
   
   if(Array.isArray(value) || value === null) {
      return false
   } else if (
       typeof value === 'object'){
      return true
       }

   // return (Array.isArray(value))? true : false


   //DOMANDA se ho if con due return non ho bisogno di altri?

// if(value === typeof Object){
//     return true
// }else{
//     return false
// }

}

console.log(isObject("ciao"))