let getDoc = (x) => document.getElementById(x)


let validate = (...ids) => {
    let results = []
    for (let id = 0; id < ids[0].length; id++) {
        // console.log(ids)
        let idn = ids[0][id]
            //   console.log(idn)
        if (!getDoc(idn).value) {
            //now check and convert those numbers to the id of the actual boxes
            idn = idn === '5' ?
                'v1' : idn === '6' ?
                'v2' : idn === '7' ?
                'v3' : idn === '8' ?
                'v4' : idn

            getDoc(idn).style.border = '2px solid red'
        } else {
            idn = idn === '5' ?
                'v1' : idn === '6' ?
                'v2' : idn === '7' ?
                'v3' : idn === '8' ?
                'v4' : idn
            getDoc(idn).style.border = 'none'
        }

    }
    return results
}


export default validate