// const userName = 'Max'
// userName = 'Maximilian' // constは定数のため値を変更できない
// let age = 30

// age = 29

// varは使用しない　グローバルスコープとなるため

// デフォルト値は引数の2番目にしか設定できない。ここでいうと「b」の話
// const add = (a: number, b: number = 1) => {
//   return a + b
// }

// const printOutput: (output: string | number) => void = (output) => {
//   console.log(output)
// }

// printOutput(add(2))

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
  firstName: 'Max',
  age: 30,
}

// スプレッド構文 personをコピーした形になる
const copiedPerson = {
  ...person,
}

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}

const addedNumbers = console.log('add', add(5, 10, 2, 3.7))

// const hobby1 = hobbies[0]
// const hobby2 = hobbies[1]
// console.log('hobby1', hobby1)
// console.log('hobby2', hobby2)

const [hobby1, hobby2] = hobbies
console.log('hobby1', hobby1)

const { firstName, age } = person
console.log('firstName', firstName)
