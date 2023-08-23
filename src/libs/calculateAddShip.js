function calculateTotal(number, weight) {
    //  console.log(number, 'number')
    //const weight = cart_no
    let others = weight - 2
    if (others <= 0) {
        const percentage = 0.12; // 12% as a decimal
        const amountToAdd = number * percentage;
        const total = number + amountToAdd + 2000;
        //   onsole.log(total, 'totla')
        return total
    }
    const percentage = 0.12
    const excess = (others / 0.5) * 7500
        // console.log(excess)
    const totalShipingPrice = excess + (number || 0); // 12% as a decimal
    // console.log(totalShipingPrice)
    //console.log(excess, 'excexx', others, totalShipingPrice)
    const amountToAdd = totalShipingPrice * percentage;
    const total = totalShipingPrice + amountToAdd + 2000;
    // ole.log(total, 'total')
    return number ? total : null

}


export default calculateTotal