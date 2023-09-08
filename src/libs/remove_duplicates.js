function removeDuplicates(arr, propertyName) {
    const seen = new Set();
    return arr.filter((item) => {
        const propertyValue = item[propertyName];
        if (!seen.has(propertyValue)) {
            seen.add(propertyValue);
            return true;
        }
        return false;
    });
}


export default removeDuplicates
// const inputArray = [{ id: 1 }, { id: 1 }, { id: 2 }, { id: 2 }];
// const propertyName = 'id';
// const resultArray = removeDuplicates(inputArray, propertyName);

// console.log(resultArray);