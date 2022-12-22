function add(n1, n2) {
    return n1 + n2;
}
function printRsult(num) {
    console.log("Result: " + num);
}
var combineValues;
combineValues = add;
// combineValues = printRsult
console.log('combineValues', combineValues(8, 8));
printRsult(add(5, 12));
