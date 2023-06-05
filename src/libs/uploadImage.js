import pic from './uri'
let upload = (formID, cb, ) => {
    //console.log('jknhzxn ')
    const formElem = document.getElementById(formID)

    fetch(pic.pic_uri, {
        method: 'POST',
        body: new FormData(formElem)
    }).then(res => {
        return res.json();
    }).then(res => {

        // console.log(res)
        cb && cb(null, res)
    }).catch(err => {
        // console.log(err, 'djihlndku.,jm')
        cb && cb(err)
    })

}

export default upload