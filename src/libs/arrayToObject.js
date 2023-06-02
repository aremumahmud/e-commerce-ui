function arrayToObject(array) {
    let arr = [...array]
    let result = {}
    arr.forEach(el => {
        result[el._id] = el
    })

    return result
}

export default arrayToObject