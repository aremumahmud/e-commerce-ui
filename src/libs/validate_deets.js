let getDoc = (x) => document.getElementsByName(x)[0]


let validate = (ids, isNaij) => {
    let results = []
    for (let id = 0; id < ids.length; id++) {
        // console.log(ids)
        let idn = ids[id]

        if (!getDoc(idn).value.trim()) {
            //now check and convert those numbers to the id of the actual boxes
            if (!isNaij && idn === 'state') {
                return
            }
            results.push(1)
            getDoc(idn).style.border = '2px solid red'
        } else {
            getDoc(idn).style.border = 'none'
        }

    }


    return results
}


export default validate