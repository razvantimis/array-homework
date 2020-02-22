// compute how many times a certain element appears in the array [2, 5, 10, 90, 1, -25, 2]

const elFind = 2;
let elCount = 0;

const array = [2, 5, 10, 90, 1, -25, 2];
for (let index = 0; index < array.length; index++) {
    const el = array[index];
    if (el === elFind) {
        elCount += 1;
    }
}

console.log(elCount)