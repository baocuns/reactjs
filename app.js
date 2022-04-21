var array = ["bao", "khanh", "phu"];

var a = array[0];
var b = array[1];
var c = array[2];

console.log(a, b, c);

//2
var array = ["bao", "khanh", "phu"];

var [a, b, c] = array;

console.log(a, b, c);
//
var array = ["bao", "khanh", "phu"];

var [a, c] = array;

console.log(a, c);

//rest
var array = ["bao", "khanh", "phu"];

var [a, ...rest] = array;

console.log(a);
console.log(rest); //lay nhung thang con lai tru a

//obj
var obj = {
    name: "cuns",
    price: 1000
};
var { name, price } = obj;
console.log(name, price);

var obj = {
    name: "cuns",
    price: 1000,
    img: "img"
};
var { name, ...rest } = obj;
console.log(name);
console.log(rest);

//xoa key
var objj = {
    name: "cuns",
    price: 1000,
    img: "img"
};
var { name, ...newObject } = objj; //newObject se ko co [name]
console.log(newObject);

// object con
var objj = {
    name: "cuns",
    price: 1000,
    img: "img",
    children: {
        name: "reactjs"
    }
};
var { name: parentName, children: { name } } = objj; //newObject se ko co [name]
console.log(parentName); //doi ten name ben ngoai
console.log(children); //cach doi ten. name:tendoi

//gia tri mac dinh
var obj = {
    name: "cuns",
    price: 1000,
    img: "img"
};
var { name, description = 'default description' } = obj;
console.log(name);
console.log(redescriptionst); //lay gia tri mac dinh
//
var obj = {
    name: "cuns",
    price: 1000,
    img: "img",
    description: 'value' //duowc lay ra
};
var { name, description = 'default description' } = obj;
console.log(name);
console.log(redescriptionst);

//toan tu ...
function logger(...params) {
    console.log(params);
}