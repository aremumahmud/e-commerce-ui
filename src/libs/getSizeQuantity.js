function getSizeQuantity(sizes, size) {
    let size_found = 0
    for (let i = 0; i < sizes.length; i++) {
        const element = sizes[i];

        if (element.size == size) {
            size_found = element.qty
            break
        }
    }

    return size_found
}

export default getSizeQuantity