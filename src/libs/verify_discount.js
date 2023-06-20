import pic from './uri'

export default function verify_discount(value, cb) {
    fetch(pic.verify_discount_uri + '?discount_code=' + value).then(res => {
        return res.json()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}