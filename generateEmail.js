let products = []

let template = `
<div class="container">
<div class="logo">
    <p>Glitz<span>abelle</span></p>
</div>
<div>
    <img class="img" src="https://res.cloudinary.com/dvauarkh6/image/upload/v1686142418/DEV/sbog3ukjm1prpggzajv7.svg" alt="">
</div>
<br>
<div class="topic">
    <p>You have sucessfuly placed an order at Glitzabelle stores!</p>
</div>
<br>
<div class="topic2">
    <p>Here is/are your orders list</p>
</div>
<br>
<div class="tiles">

`

let end = `
</div>
</div>`

let product = (x) => `
<div class="view_tile">
<div class="grp">
    <div class="imageDs">
        <img src=${x.image} alt="" />
    </div>
    <div class="info12">
        <p class='topic1'>${x.parent_product}</p>
        <p>quantity: ${x.quantity}</p>
    </div>
</div>
<div class='info22'>
    <p class='topic1'>${x.price}</p>
    <p>price</p>
</div>

</div>
`

let j = {
    "_id": "6480796bd00aa03161f014f6",
    "reference": "p8e5cy3vr5",
    "first_name": "Mahmud",
    "last_name": "Aremu",
    "phone_number": "07064552617",
    "email_address": "aremumahmud2003@gmail.com",
    "city": "Ilorin",
    "zip_code": "240003",
    "address": "Tanke Bubu irepodun",
    "products": [{
            "image": "https://res.cloudinary.com/dvauarkh6/image/upload/v1685295655/DEV/dlqf470msum2hkukggmt.png",
            "id": "647393fbb9c1418e41bda13b",
            "parent_product": "Air caps",
            "quantity": 1,
            "price": 2300
        },
        {
            "image": "https://res.cloudinary.com/dvauarkh6/image/upload/v1685295682/DEV/moxmpisgqmdyb72a3j54.png",
            "id": "647393fbb9c1418e41bda13c",
            "parent_product": "Air caps",
            "quantity": 1,
            "price": 2300
        }
    ],
    "__v": 0
}


function generate(points) {

    let prods = points.map(x => product(x)).join('')
    let template_final = template + prods + end
    return template_final

}


require('fs').writeFileSync('./hh.html', generate(j.products))