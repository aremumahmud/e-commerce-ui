import process_data from './process_product_data'
import pic from './uri'

export default function search(searchStr, cb) {
    fetch(pic.search_uri + '?search_string=' + searchStr).then(res => {
        return res.json()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}