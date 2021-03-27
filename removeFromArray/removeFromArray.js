const removeFromArray = function(list, ...item) {
    for (let i = 0; i < item.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (item[i] === list[j]) {
                list.splice(j, 1)
            }
        }
    }
    return list
}


module.exports = removeFromArray