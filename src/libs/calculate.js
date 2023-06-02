function calculate(arr) {
    let total = 0
    arr.forEach(d => {
        console.log(d.price, 'd')
        total += d.price * d.quantity_for_cart
    })
    return total
}

export default calculate