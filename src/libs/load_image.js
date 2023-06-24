import upload from "./uploadImage"

let getDoc = (x) => document.getElementById(x)

// function handle_file_change(event, target, effect, effect1, effect3) {


function handle_file_change(event, target, form, effect, effect1, effect3) {
    event.stopPropagation()
    console.log('hello')
    let file = event.target.files[0]
    event.target.onchange = () => { console.log('dd') }
        //handle_file_change.apply(null, arguments)
    let file_reader = new FileReader()
    file_reader.onload = (e) => {
        //console.log(e.target.result)
        getDoc(target).style.background = `url('${ e.target.result}')`
        effect1(true)
        upload(form, (err, res) => {
                if (err) {
                    getDoc(target).style.background = ''
                    effect1(false)
                    document.querySelectorAll('[input]')
                    return alert('error during upload')
                }
                effect1(false)
                effect(true)
                effect3(res.picture)
            })
            // console.log(getDoc(target).onsubmit)
            // getDoc(target).submit()

    }
    file_reader.readAsDataURL(file)
}

export default handle_file_change