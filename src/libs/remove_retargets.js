import pic from './uri'

export default function remove_retarget(cb) {
    // console.log(price)

    let use = pic.remove_retarget_uri
    let jobsinlocal = localStorage.getItem('LOCALJOB_IDS')
    let jobids = jobsinlocal ? jobsinlocal.split('__') : []
        //convert the cart object to an array
    fetch(use, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': 'Bearer ' + localStorage.getItem('TokenID')
        },
        body: JSON.stringify({

            jobIdsToDelete: jobids,

        })
    }).then(res => {
        return res.json()
    }).then(res => {
        cb && cb(null, res)
    }).catch(err => {
        cb && cb(err)
    })
}