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
// -deve contenere un "@"   --> email.includes("@")

// dopo il @ deve essere presente un punto --> 
// dove si trova la @ (indexOf("@"))
//cosa c`e` dopo? estrarre parte successiva a @ con slice
//includes per verificare se c`e` .

// non devono esserci spazi iniziali o Finali
const validateEmail = (email) =>  {
    console.log("1.questa e:", email)
    let isValid=true
    let atIndex = email.indexOf("@")
    let afterAt = email.slice(atIndex + 1)

    if(!email.includes("@") ) {
       isValid = false        
       console.log("2.entro nel primo if :", "email must include @")
    } 

    if (email.includes("@") && !afterAt.includes(".")) {
        isValid = false
        console.log("3.entro nel 2 if:", "email must contain a dot")
    }

    if (email.startsWith(" ") || email.endsWith(" ")) {
        isValid = false
        console.log("4.entro nel 4 if:", "check for space at the beginning and the end of the email")
    }
    console.log("5.Return console.log:", email)
    return isValid
}



// console.log(validateEmail("utente@dominiocom")) //true
// console.log(validateEmail(" utentedominio.com")) //false

//////////////////////////////////////////////////////////////////////////////////////////

// validazione email:
//puo contenere solo numeri eventualmente divisi da spazi o trattini 
//la stringa deve contenere esattamente 10 cifre

const validatePhoneNumber = (phoneNumber) => {
 let numberIsValid = true
 const allowedValues = "1234567890- "
 const phone = phoneNumber.split("")
 let digitCount = 0;

phone.forEach((elem) => {
    if (!allowedValues.includes(elem)) { //se non e in allowedValues
        console.log("enter first validation:")
        numberIsValid = false
    }
   
    if ("1234567890".includes(elem)) {
        digitCount++
    }

})

if ( digitCount !== 10) {
    console.log("Enter second validation: Must contain exactly 10 digits.");
    return false;
}

    

return numberIsValid

}


console.log(validatePhoneNumber("777-979-61"))

//USO REGEX

// Serve a rimuovere spazi e trattini / [-\s] / g ?

//   / e / → Indicano l'inizio e la fine della regex.
//   [-\s] → Cerca trattini(-) o spazi(\s):
// - → Il trattino viene cercato così com’è.
// \s → Indica qualsiasi spazio(spazio normale, tab, ecc.). 3️⃣ g → Significa "global", cioè trova tutti i trattini e spazi, non solo il primo.

// Questa regex verifica che ci siano solo numeri   /^\d + $ /

//  ^ → Inizia dall'inizio della stringa.
//  \d → Significa "qualsiasi cifra"(0 - 9).
//  + → Vuol dire "una o più cifre".
//  $ → Deve finire esattamente lì(evita caratteri extra).

// .test() prende una stringa e la confronta con la regex.
// Se la stringa rispetta la regex, restituisce true.
// Se la stringa non rispetta la regex, restituisce false.

const validatePhoneNumberRegex = (phoneNumber) => {
    //Rimuovo spazi e trattini 
    let onlyNumbers = phoneNumber.replace(/[-\s]/g,'');

    //controlla se ha solo cifre e ha esattamente 1o cifre
    if (!/^\d+$/.test(onlyNumbers) || onlyNumbers.length !== 10) { 
        return false;
    }
    return true;
};
