function Authenticate(action, options = {}, callback) {
    console.log('hdsbuyxhzjmn')
    fetch(action, {
        method: 'POST',
        credentials: 'include',
        body: new URLSearchParams({
            email: options.email,
            password: options.password,
            username: options.username,
            password2: options.password2
        }),
        mode: 'cors',
        headers: {

            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        }
    }).then(res => {
        return res.json()
    }).then(res => {
        console.log(res)
        if (!res.error || res.auth) {
            callback && callback(null, {
                success: true
            })
            return
        }
        callback && callback({
            success: false,
            reason: 'invalid credentials',
            res
        })


    }).catch(e => {
        console.log('e', e)
        callback && callback({
            success: false,
            reason: 'an unexpected error happened'
        })
    })
}

export default Authenticate