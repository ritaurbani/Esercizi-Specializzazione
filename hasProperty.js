// (EASY) 8. * hasProperty *: Check if an object has a specific property.
// hasProperty({id: 1}, "name") → false  

//controllo se oggetto ha una sola proprieta
const hasProperty = (obj, property) => {
    for (let key in obj) {
        // console.log("controllo key",key)
        // console.log("controllo property",property)
        if (key === property) {
            // console.log("nel primo if",key)
            // console.log("nel primo if:",property)
            return true
        }
    }
    return false //
}

console.log(hasProperty({ class: "math", name: "rita", id: 23 }, "id")) //false
//rivedere return quando c e un loop

// Il ciclo for...in scorre tutte le chiavi dell'oggetto.

// Se una chiave corrisponde alla property, ritorna subito true.

// Se il ciclo finisce senza trovare la proprietà, solo allora ritorna false.
//QUINDI VERIFICA PRIMA TUTTI I NUMERI NEL LOOP POI FUORI DAL LOOP RETURN FALSE
// Se vuoi controllare tutto l'array, metti il return solo quando sei sicuro che hai finito di iterare.