function calculateTotal(number, cart_no) {
    const percentage = 0.12; // 12% as a decimal
    const amountToAdd = number * percentage;
    const total = number + amountToAdd + 2000;
    return cart_no > 2 ? (total + 7500) : total
}

export default calculateTotal