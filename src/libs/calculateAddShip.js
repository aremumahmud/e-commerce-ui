function calculateTotal(number) {
    const percentage = 0.12; // 12% as a decimal
    const amountToAdd = number * percentage;
    const total = number + amountToAdd + 2000;
    return total;
}

export default calculateTotal