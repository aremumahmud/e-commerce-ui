import pic from './uri'

export default function fetch_exchange(cb) {
    fetch(pic.get_exchanges_uri).then(res => {
        return res.json()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}