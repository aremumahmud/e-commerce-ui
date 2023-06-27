import pic from './uri'

export default function modify_exchange(body, cb) {
    // console.log(price)
    if (!(body)) return cb && cb({
        msg: 'Please fill all fields',
        error: true
    })
    let use = pic.modify_exchange_uri
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
        alert(res)
        cb && cb(null, res)
    }).catch(err => {
        alert(JSON.stringify(err))
        cb && cb(err)
    })
}
