const userName = 'Max'
// userName = 'Maximilian' // constは定数のため値を変更できない
let age = 30

age = 29

// varは使用しない　グローバルスコープとなるため

const add = (a: number, b: number) => {
  return a + b
}

const printOutput: (output: string | number) => void = (output) => {
  console.log(output)
}

printOutput(add(2, 5))

const button = document.querySelector('button')

if (button) {
  button.addEventListener('click', (event) => {
    console.log(event)
  })
}

// function add(a: number, b: number) {
//   let result
//   result = a + b
//   return result
// }
