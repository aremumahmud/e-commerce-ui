import pic from './uri'

export default function retarget(cart, emailRecipient, jobIdsToDelete, userdata, cb) {
    // console.log(price)
    if (!(cart)) return cb && cb({
        msg: 'Please fill all fields',
        error: true
    })
    let use = pic.retarget_uri

    //convert the cart object to an array
    let cart_array = Object.keys(cart).map(id => cart[id])
    fetch(use, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer ' + localStorage.getItem('TokenID')
        },
        body: JSON.stringify({
            data: { products: cart_array, ...userdata },
            jobIdsToDelete,
            emailRecipient
        })
    }).then(res => {
        return res.json()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}