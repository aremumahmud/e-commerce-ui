function arrayToObject(array, prop = '_id') {
    let arr = [...array]
    let result = {}
    arr.forEach(el => {
        result[el[prop]] = el
    })

    return result
}

export default arrayToObject