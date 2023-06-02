import pic from './uri'

export default function fetch_orders(cb) {
    fetch(pic.fetch_orders_uri, {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.text()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}