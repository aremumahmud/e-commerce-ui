import pic from './uri'

export default function fetch_categories(cb) {
    fetch(pic.get_categories).then(res => {
        return res.json()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}