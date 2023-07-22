function process_data(data) {
    //console.log(data, 'll')
    return data.data.map(x => helper(x)).flat(1)

}


function helper(data) {
    // if (data.varieties.length === 0) return []
    console.log('varies!!!', data.varieties)
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
    console.log(varieties, "!varrirr")
    return varieties
}
export default process_data