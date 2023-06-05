function process_data(data) {
    //console.log(data, 'll')
    return data.data.map(x => helper(x)).flat(1)

}


function helper(data) {
    let varieties = data.varieties.map(dt => {
        return {
            ...data,
            ...dt,
            varieties: data.varieties.map(x => ({ image: x.image, id: x._id, name: x.name, quantity: x.quantity })),

        }
    })
    return varieties
}
export default process_data