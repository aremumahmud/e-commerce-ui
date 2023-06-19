import pic from './uri'

export default function suscribe(email, cb) {
    fetch(pic.suscribe_uri + '?email=' + email).then(res => {
        return res.json()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}