import pic from './uri'

export default function verify_otp(email, token, cb) {
    fetch(pic.verify_otp + '?email=' + email + '&token=' + token).then(res => {
        return res.json()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}