function add(n1: number, n2: number, showResuit: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //     throw new Error('入力値が正しくありません')
  // }
  const result = n1 + n2
  if (showResuit) {
    console.log(phrase + result)
  } else {
    return result
  }
}

const number1 = 5
const number2 = 2.8
const printResult = true
const resultPhrase = "Result: "

add(number1, number2, printResult, resultPhrase)
