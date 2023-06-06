//base structure


// let example = {
//     product_name,
//     image,
//     descrciption,
//     price,
//     discount,
//     varieties: []
// }

// let variety = {
//     image,
//     parentProduct,
//     inventoryRecord,
//     quantity,
//     isOutOfStock
// }


export default function generateProductStructure(options, variety) {
    // let variety = []
    return {
        product_name: options.product_name,
        image: options.v1,
        description: options.product_description,
        price: options.product_price,
        discount: options.product_discount,
        category: options.category,
        //varieties object
        varieties: variety.map(x => ({
            image: x.image,
            parentProduct: options.product_name,
            inventoryRecord: x.inventory,
            quantity: x.inventory,
            isOutOfStock: x.inventory < 0 ? true : false
        }))
    }
}