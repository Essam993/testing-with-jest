// const {sum, subtract} = require('../math')

// test('sum adds numbers', () => {
//   const result = sum(3, 7)
//   const expected = 10
//   expect(result).toBe(expected)
// })

// test('subtract subtracts numbers', () => {
//   const result = subtract(7, 3)
//   const expected = 4
//   expect(result).toBe(expected)
// })

// function test(title, callback) {
//   try {
//     callback()
//     console.log(`✓ ${title}`)
//   } catch (error) {
//     console.error(`✕ ${title}`)
//     console.error(error)
//   }
// }

// function expect(actual) {
//   return {
//     toBe(expected) {
//       if (actual !== expected) {
//         throw new Error(`${actual} is not equal to ${expected}`)
//       }
//     }
//   }
// }


const sum = (a, b) => a + b
const subtract = (a, b) => a - b

test('Add Numbers', () => {
  const result = sum(5, 6)
  const expected = 11
  expect(result).toBe(expected)
})

test('Subtract Numbers', () => {
  const result = sum(20, 3)
  const expected = 5
  expect(result).toBe(expected)
})

function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.log(`✕ ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}