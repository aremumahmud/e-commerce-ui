function paginate_products(products, n) {
    products = products.filter(x => x.mode !== 'servant')
    const subarrays = [];

    if (n <= 0) {
        return []
    }

    for (let i = 0; i < products.length; i += n) {
        subarrays.push(products.slice(i, i + n));
    }
    // console.log(subarrays, 'fjkfmnd')
    return subarrays;
}

export default paginate_products

// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const subarrayLength = 3;

// const subarrays = divideArrayIntoSubarrays(originalArray, subarrayLength);
// console.log(subarrays);