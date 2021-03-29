const getTheTitles = function(arr) {
    var array = []
    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i].title)
    }
    return array
}
module.exports = getTheTitles;