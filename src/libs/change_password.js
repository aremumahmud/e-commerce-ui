import pic from './uri'

export default function change_password(id, token, password, cb) {
    fetch(pic.change_password + '?id=' + id + '&token=' + token + '&password=' + password).then(res => {
        return res.json()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}