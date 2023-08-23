function calculateWeight(cart) {
    let totalWeight = 0
    cart.forEach(item => {
        totalWeight += (item.weight || 1)
    })

    return totalWeight
}


export default calculateWeight