import pic from './uri'

export default function fetch_shipment(cb) {
    fetch(pic.get_shipments_uri).then(res => {
        return res.json()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}