function calculateWeight(cart) {
    let totalWeight = 0
    cart.forEach(item => {
        totalWeight += (item.weight || 1) * item.quantity_for_cart
    })

    return totalWeight
}


export default calculateWeight