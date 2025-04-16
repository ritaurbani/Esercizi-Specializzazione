// (MEDIUM / HARD)5. * isAnagram *: Check if two strings are anagrams.
//     isAnagram("listen", "silent") → true  

const isAnagram = (str1,str2) => {
    arr1 = str1.split("")
    arr2 = str2.split("")

   return arr1.every((lett) => arr2.includes(lett))

}

console.log(isAnagram("anna", "papi"))