const userName = 'Max'
// userName = 'Maximilian' // constは定数のため値を変更できない
let age = 30

age = 29

// varは使用しない　グローバルスコープとなるため

// デフォルト値は引数の2番目にしか設定できない。ここでいうと「b」の話
const add = (a: number, b: number = 1) => {
  return a + b
}

const printOutput: (output: string | number) => void = (output) => {
  console.log(output)
}

printOutput(add(2))

const button = document.querySelector('button')

if (button) {
  button.addEventListener('click', (event) => {
    console.log(event)
  })
}

const hobbies = ['Sport', 'Cooking']
const activeHobbies = ['Hiking', ...hobbies]

activeHobbies.push(...activeHobbies)

const person = {
  name: 'Max',
  age: 30,
}

const copiedPerson = {
  ...person,
}
