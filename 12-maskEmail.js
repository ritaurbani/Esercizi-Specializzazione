// (MEDIUM) 7. * maskEmail *: Mask part of an email(e.g., "te**@example.com").
//         maskEmail("test@example.com") → "te**@example.com"


const maskEmail = (email) => {
    const name = email.split("@")[0]   
    const domain = email.split("@") [1]
    console.log(domain)
    const lastElem = name[name.length - 1]
    const beforeLastElem = name[name.length - 2]
    console.log(beforeLastElem)
    // console.log(lastElem)
    const newName = name.replace(lastElem, " * " )
    const finalName = newName.replace(lastElem, " * " )
    console.log(finalName)
    const joined = [finalName, domain].join("@")
    return joined

}

console.log(maskEmail("caffe@example.com"))
