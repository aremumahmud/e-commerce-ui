let getDoc = (x) => document.getElementsByName(x)[0]


let validate = (...ids) => {
    let results = []
    for (let id = 0; id < ids[0].length; id++) {
        // console.log(ids)
        let idn = ids[0][id]
            //   console.log(idn)
        if (!getDoc(idn).value && idn === 'zip_code') {
            //now check and convert those numbers to the id of the actual boxes
            results.push(1)
            getDoc(idn).style.border = '2px solid red'
        } else {
            getDoc(idn).style.border = 'none'
        }

    }
    return results
}


export default validate