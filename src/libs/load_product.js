import process_data from "./process_product_data"
import d from "./test"
import pic from "./uri"

function load_products(cb) {
    fetch(pic.get_products_uri).then(res => {
        return res.json()
    }).then(res => {
        // process_data
        cb && cb(null, process_data(res.data))
    }).catch(err => {
        cb && cb(err, null)

    })
}


export default load_products