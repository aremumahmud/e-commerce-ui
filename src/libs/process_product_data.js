function process_data(data) {
    //console.log(data, 'll')
    return data.data.map(x => helper(x)).flat(1)

}


function helper(data) {
    let mode = 0
    let varieties = data.varieties.map(dt => {
        mode++
        return {
            parent_id: data._id,
            ...data,
            ...dt,
            mode: mode == 1 ? 'ruler' : 'servant',
            varieties: data.varieties.map(x => ({ image: x.image, id: x._id, name: x.parent_product, quantity: x.quantity, sizes: x.sizes })),

        }
    })
    return varieties
}
export default process_data