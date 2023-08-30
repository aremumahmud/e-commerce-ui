function calculate_virtual_discount(discount, price) {
    let discounted_price = Number(price) - ((Number(price) * Number(discount)) / 100)

    return discounted_price
}

export default calculate_virtual_discount