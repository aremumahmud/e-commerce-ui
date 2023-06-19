function arrayToObject(array) {
    let arr = [...array]
    let result = {}
    arr.forEach(el => {
        result[el.size] = el
    })

    return result
}

export default arrayToObject