
exports.min = function min (array) {
    if (arguments.length===0||arguments[0].length===0){
        return 0;
    } else {
        return array.sort((a,b)=>a-b)[0]
    }

}

exports.max = function max (array) {
    if (arguments.length===0||arguments[0].length===0){
        return 0;
    } else {
        return array.sort((a,b)=>a-b)[array.length-1]
    }
}

exports.avg = function avg (array) {
    if (arguments.length===0||arguments[0].length===0){
        return 0;
    } else {
        let sum= array.reduce(function(previousValue, currentValue) {
            return previousValue + currentValue;
        })
        return sum/array.length
    }


}
