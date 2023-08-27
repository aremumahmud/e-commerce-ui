function calculate_virtual_discount(discount, price) {
    let virtual_price = (100 * Number(price)) / Number(100 - discount)

    return virtual_price
}

export default calculate_virtual_discount