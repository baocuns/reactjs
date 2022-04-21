function logger(...params) {
    console.log(params);
}
logger(1, 2, 3, 4, 5);

function logger(a, b, ...params) {
    console.log(params);
    return a + b;
}
logger(1, 2, 3, 4, 5);

//obj
function logger(obj) {
    console.log(obj.name);
    console.log(obj.price);
}
logger({
    name: "cuns",
    price: 1000,
    img: 'img'
});

//
function logger({ name, price }) {
    console.log(name);
    console.log(price);
}
logger({
    name: "cuns",
    price: 1000,
    img: 'img'
});

//
function logger({ name, price, ...rest }) {
    console.log(name);
    console.log(price);
    console.log(rest);
}
logger({
    name: "cuns",
    price: 1000,
    img: 'img'
});

//array
function logger([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}
logger([1, 2, 3, 4, 5, 6]);

//spread, noi mang
var array1 = ['bao', 'khanh', 'phu'];
var array2 = ['tuan', 'tien'];
var array3 = [...array2, ...array1];

//obj
var obj1 = {
    name: 'cuns'
}
var obj2 = {
    price: 1000
}
var obj3 = {
    ...obj1,
    ...obj2
}

//
var array = ['bao', 'khanh', 'phu'];

function logger(a, b, c) {
    console.log(a, b, c);
}
console.log(...array);

//
function logger(...rest) {
    console.log(rest);
    rest.forEach(element => {
        console.log(element);
    });
}
console.log(...array);