import pic from './uri'

export default function send_locked_to_be_product(body, price, user_data, currency, cb) {
    // console.log(price)
    if (!(user_data && price)) return cb && cb({
        msg: 'Please fill all fields',
        error: true
    })
    fetch(pic.upload_locked_product_uri, {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer ' + localStorage.getItem('TokenID')
        },
        body: JSON.stringify({
            inventory: Object.keys(body).map(x => body[x]),
            price,
            user_data,
            currency
        })
    }).then(res => {
        return res.text()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}