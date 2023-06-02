// let sample = {
//     name: 'Airpods Pro',
//     price: [200, 99],
//     description: 'A perfect balance of high quality cap',
//     rating: [5, 121]
// }

// let random = (x, y) => Math.floor(Math.random() * y) + x

// let names = ['Airpods Pro', 'Caps Pro', 'Turbans', 'Female Caps']

// function generateRandomProducts(x) {
//     let results = []

//     for (let i = 0; i < x; i++) {
//         results.push({
//             name: names[random(0, 3)],
//             price: [random(200, 300), 99],
//             description: 'A perfect balance of high quality cap',
//             rating: [random(4, 4), random(100, 140)]
//         })
//     }
//     return results
// }

// require('fs').writeFileSync('data.json', JSON.stringify(generateRandomProducts(12)))

let data = require('./data.json')

require('http').createServer((req, res) => {
    res.end(JSON.stringify(data))
}).listen(4000)