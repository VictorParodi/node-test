let add = (a, b) => {
    return a + b;
}

let addAsync = (a, b, callback) => {
    setTimeout(() => {
        return callback(a + b);
    }, 1000);
}

let square = (num) => num * num;

let sqrtAsync = (num, callback) => {
    setTimeout(() => {
        callback(num * num);
    });
}

module.exports = {
    add,
    square,
    addAsync,
    sqrtAsync
}