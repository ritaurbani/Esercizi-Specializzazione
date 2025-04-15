// (MEDIUM/HARD) 5. *invertObject*: Swap keys and values.
//    invertObject({a: "x", b: "y"}) → {x: "a", y: "b"}  


const invertObject = (obj) => {
    let newObj = {}
    for(let key in obj){
        newObj[obj[key]] = key
    }
    return newObj
}
//WRONG
//newObj = { obj[key]: key } crea un oggetto nuovo ogni volta (e lo assegna a newObj).
//Alla fine del ciclo, newObj contiene solo 
//l'ultima coppia perché viene sovrascritto ogni volta.
//CORRETTO
//newObj[obj[key]] = key significa:Prendi il valore(obj[key], es. "x") 
// e usalo come chiave nel nuovo oggetto.Assegna a quella chiave 
// il vecchio nome(key, es. "a").

// nuovoOggetto[vecchioValore] = vecchiaChiave;
// const value = obj[key]; 
// newObj[value] = key;

console.log(invertObject({ a: "x", b: "y" }))