// (MEDIUM) 10. *zipArrays*: Combine two arrays into pairs.
//     zipArrays([1, 2], ["a", "b"]) → [[1, "a"], [2, "b"]]  

// const zipArrays = (arr1, arr2) => {
//     const merged = []
   
//     arr1.forEach((elem, i) => 
//         merged.push([arr1[i], arr2[i]])
//     )
//     return merged
// }


// console.log(zipArrays([1, 2], ["a", "b"]))



// const zipArrays = (arr1, arr2) => {
// const mergedArrI = []
// const mergedArrJ = []
// const concatArr = mergedArrI.concat(mergedArrJ)
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j.arr2.length;j++){
//                 const currI = arr1[i]
//                 const currJ = arr2[j]
//             if(currI && currJ % 2 === 0){
//                 mergedArrI.push(currI,currJ)
//             }else{
//                 mergedArrJ.push(currI,currJ)
//             }
//         }
//     }
//     return concatArr
// }
// console.log(zipArrays([1, 2], ["a", "b"]))



console.log(zipArrays([1, 2], ["a", "b"]))

arr1.forEach((elem, i) => {
    merged.push([elem, arr2[i]]);
});

// "Per ogni elemento dell'array arr1, prendo sia il suo valore che la sua posizione (i).
// Poi creo una coppia: prendo il valore attuale(elem) 
// e il valore che sta alla stessa posizione(i) dentro arr2.
// Questi due valori li metto insieme dentro un array[elem, arr2[i]].
// Questa coppia la aggiungo nell'array merged."

