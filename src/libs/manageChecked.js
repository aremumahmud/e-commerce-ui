function manageChecked(arr = [], checked) {
    let toCheck = arr

    toCheck.forEach(elem => {
        if (elem === checked) return
        document.getElementById(elem).checked = false
    })

}

export default manageChecked