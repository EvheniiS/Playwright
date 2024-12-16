function sum (a, b) {
    return a+b;
}

console.log(sum(10, 10)); 

function product (a, b) {
    return a*b;
}

console.log(product(12, 12));

const bigProduct = product(1573, 123219) 
console.log(bigProduct);

setTimeout(function () {
    console.log("Hey! You rock!!");
}, 1000);

setTimeout(() => console.log("Hey! You rock!!"), 1000);