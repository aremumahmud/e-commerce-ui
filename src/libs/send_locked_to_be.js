import pic from './uri'

export default function send_locked_to_be_product(uri, body, price, user_data, currency, discount, country, cb) {
    // console.log(price)
    if (!(user_data && price)) return cb && cb({
        msg: 'Please fill all fields',
        error: true
    })
    let use = pic[uri] || pic['upload_locked_product_uri_guest']
    fetch(use, {
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
            currency,
            discount,
            country
        })
    }).then(res => {
        return res.text()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}