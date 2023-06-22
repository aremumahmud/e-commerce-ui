import pic from './uri'

export default function modify_product(body, cb) {
    // console.log(price)
    if (!(body)) return cb && cb({
        msg: 'Please fill all fields',
        error: true
    })
    let use = pic.modify_product_uri
    fetch(use, {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer ' + localStorage.getItem('TokenID')
        },
        body: JSON.stringify(body)
    }).then(res => {
        return res.text()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}