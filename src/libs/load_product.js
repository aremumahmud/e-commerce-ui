import process_data from "./process_product_data"
import d from "./test"
import pic from "./uri"

function load_products(category, cb) {
    fetch(pic.get_products_uri + '/' + category).then(res => {
        return res.json()
    }).then(res => {
        // process_data

        //console.log(res.data)
        cb && cb(null, process_data(res.data))
            // cb && cb(null, res.data.data)
    }).catch(err => {
        cb && cb(err, null)

    })
}


export default load_products