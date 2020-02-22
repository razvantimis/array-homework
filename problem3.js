// compute the sum of the elements of the array [2, 5, 10, 90, 1, -25, 2]  and display it in the console
const array = [2, 5, 10, 90, 1, -25, 2];

// var1
let sum = 0;
for (let index = 0; index < array.length; index++) {
    sum = sum + array[index];
}
console.log(sum);

// var2
console.log(array.reduce((acc, el) => acc + el, 0))