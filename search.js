// search() should return true if element is present in array
// search() should return false if element is not present in array
const search = (array, element) => {
    if (array.length === 0) {
        return false
    }

    if(array.includes(element)){
        return true
    }

    if(!array.includes(element)){
        return false
    }
}

module.exports = {
    search
}