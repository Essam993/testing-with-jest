const sum = ( a, b ) => a + b
const subtract = ( a, b ) => a - b

let result, expected

result = sum(3, 7)
expected = 5
if (result !== expected) {
  throw new Error(` ${result} not equal to ${expected}`)
}