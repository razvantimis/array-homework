
/*
Use two nested (one inside to another) for structures to log the following pattern:

    0 1 0 1

    1 0 1 0

    0 1 0 1

    1 0 1 0
*/
const length = 4;
let matrice = ""
for (let indexFirstLevel = 0; indexFirstLevel < length; indexFirstLevel++) {
    const isOdd = indexFirstLevel % 2 !== 0
    for (let indexSecondLevel = 0; indexSecondLevel < length; indexSecondLevel++) {
        if (indexSecondLevel % 2 === 0) {
            matrice += isOdd ? "1 " : "0 "
        } else {
            matrice += isOdd ? "0 " : "1 "
        }
    }
    matrice += "\n"
}
console.log(matrice)