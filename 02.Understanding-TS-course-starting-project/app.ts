function add(n1: number, n2: number) {
  return n1 + n2
}

function printRsult(num: number): void {
  console.log("Result: " + num)
}

let combineValues: (a: number, b: number) => number

combineValues = add
// combineValues = printRsult

console.log('combineValues', combineValues(8, 8))

printRsult(add(5, 12))
