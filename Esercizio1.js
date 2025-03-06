// Esercizio 2
// Objective: Write a function that takes an array of user objects(with properties like name, age) 
// and returns a new array of objects where each object has an additional property isAdult 
// which is true if age >= 18 and false otherwise.
//     e.g.:
// const result = addAdultProperty([{ name: ‘Attilio’, age: 18 }, { name: ‘Giovanni’, age: 12 }])
// console.log(result)
// [{ name: ‘Attilio’, age: 18, isAdult: true }, { name: ‘Giovanni’, age: 21, isAdult: false }]

// const addAdultProperty = (array) => {
//     // const newArray = array.filter((item) => item.age > 18)
//     array.forEach((obj) => {
//         if(obj.age >= 18) {
//             return {...obj, isAdult:true}
//             console.log("newObj:", newObj)
//             // console.log("newArray:", newArray)
//         } else {
//             return {...obj, isAdult:false}
//             console.log("newObj:", newObj)
//             // console.log("newArray:", newArray)
//         }
//     })
//      return array
// }

// console.log(addAdultProperty([{ name: "Attilio", age: 18 }, { name: "Giovanni", age: 12 }]))

// const addAdultProperty = (array) => {
//     let newArray = [];

//     array.forEach((obj) => {
//         if (obj.age >= 18) {
//             newArray.push({ ...obj, isAdult: true }); 
//         } else {
//             newArray.push({ ...obj, isAdult: false }); 
//         }
//     });

//     return newArray; 
// };

// console.log(addAdultProperty([{ name: "Attilio", age: 18 }, { name: "Giovanni", age: 12 }]));


/////////////////////////////////////////////////////////////////////////////////////////

// validazione email:
// -deve contenere un "@"
// dopo il @ deve essere presente un punto
// non devono esserci spazi iniziali o Finali
const validateEmail = (email) =>  {
    console.log("1.questa e:", email)
    let isValid=true
console.log("2.questa e:", email)
    if(!email.includes("@") ) {
       isValid = false        
       console.log("3.entro in if :", email)
    } 
    console.log("4.questa e:", email)
    return isValid
}



console.log(validateEmail("utente@dominio.com")) //true
console.log(validateEmail("utentedominio.com")) //false

//////////////////////////////////////////////////////////////////////////////////////////

