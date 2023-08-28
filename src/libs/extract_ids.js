function extract_ids(data = {}) {
    let ids = []
    let keys = Object.keys(data)
    if (keys.length === 0) {
        return []
    }
    keys.forEach(key => {
        ids.push(data[key].parent_id)
    })

    return ids
}

module.exports = extract_ids