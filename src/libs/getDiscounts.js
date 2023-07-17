import pic from './uri'

export default function fetch_discount(cb) {
    fetch(pic.get_discount_uri).then(res => {
        return res.json()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}