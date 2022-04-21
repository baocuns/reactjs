//1. Định nghĩa key: value cho object
//2. Định nghĩa method cho object
//3. Định nghĩa key cho object dưới dạng biến
var name = "cuns";
var price = 1000;

//1
var obj = {
    name: name,
    price: price
}
console.log(obj);

//2
var obj = {
    name,
    price,
    getName: function() {
        return name;
    }
}
console.log(obj.getName());

//3
var obj = {
    name,
    price,
    getName() {
        return name;
    }
}
console.log(obj.getName());

//2. Định nghĩa method cho object
//1
var fieldName = "name";
var fieldPrice = "price";
const objj = {
    cuns: "bao",
    [fieldName]: "cuns",
    [fieldPrice]: 1000
};
console.log(objj);