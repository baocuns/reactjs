//arrowfunction
//1.
function myFunction(log) {
    console.log(log);
}

//2.
const myFunction = function(log) {
    console.log(log);
}

//3. arrowfunction
const myFunction = (log) => {
    console.log(log);
}

//4.
const myFunction = log => {
    console.log(log);
}
const myFunction = log => console.log(log);

//5
const sum = (a, b) => {
    return a + b;
}

//6
const sum1 = (a, b) => a + b;

//7. return kieu object
const sum2 = (a, b) => {
    return {
        a: a,
        b: b
    };
}

//8. return kieu object
const sum3 = (a, b) => ({ a: a, b: b });

//9. object
const obj = {
    name: "nguyen van bao",
    getNam: function() { //arrowfunction not context this => : () => {} failed
        return this.name;
    }
}
console.log(obj.getNam());

//10
const Obj = function(name, price) {
    this.name = name;
    this.price = price;
}