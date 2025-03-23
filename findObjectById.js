// (EASY) 9. *findObjectById*: Find object with specific id.
//    findObjectById([{id: 1}, {id: 2}], 2) → {id: 2} 

const findObjectById = (arr, id) => {
    return arr.find((obj) => obj.id === id)
}


console.log(findObjectById([{ id: 1 }, { id: 2 }], 2))