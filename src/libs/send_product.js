import pic from './uri'

export default function send_product(e, body, uploadType, cb) {
    fetch(pic.upload_product_uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...body, uploadType: uploadType ? 'one_pager' : 'default' })
    }).then(res => {
        return res.text()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}