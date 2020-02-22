// compute the maximum of the elements of the array [2, 5, 10, 90, 1, -25, 2] and display it in the console 

const array = [2, 5, 10, 90, 1, -25, 2];

let max = array[0];

for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (element > max) {
        max = element;
    }
}
console.log(max);