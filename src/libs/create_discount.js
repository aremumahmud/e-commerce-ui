import pic from './uri'

export default function create_discount(value, cb) {
    // console.log(price)
    if (!(value)) return cb && cb({
        msg: 'Please fill all fields',
        error: true
    })
    let use = pic.create_discount_uri
    fetch(use, {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer ' + localStorage.getItem('TokenID')
        },
        body: JSON.stringify({
            value
        })
    }).then(res => {
        return res.text()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}