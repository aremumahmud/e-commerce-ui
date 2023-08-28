import pic from './uri'

export default function get_current_version(parent_ids, cb) {
    // console.log(price)
    if (!(parent_ids)) return cb && cb({
        msg: 'Please fill all fields',
        error: true
    })
    let use = pic.get_updated_version
    fetch(use, {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({ parent_ids }),
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(res => {
        return res.text()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}