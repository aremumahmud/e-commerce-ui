function calculate_virtual_discount(discount, price) {
    let virtual_price = (100 * Number(price)) / Number(100 - discount)

    return virtual_price.toFixed(2)
}

export default calculate_virtual_discount