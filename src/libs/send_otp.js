import pic from './uri'

export default function send_otp(email, cb) {
    fetch(pic.send_otp + '?email=' + email).then(res => {
        return res.json()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}