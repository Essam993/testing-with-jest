// const assert = require('assert')
// const thumbWar = require('../thumb-war')
// const utils = require('../utils')

// const originalGetWinner = utils.getWinner
// utils.getWinner = (p1, p2) => p1

// const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
// assert.strictEqual(winner, 'Kent C. Dodds')

// // cleanup
// utils.getWinner = originalGetWinner


const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const originalGetWinner = utils.getWinner
utils.getWinner = (p1, p2) => p2

const winner = thumbWar('Kent C. Dodds', 'Essam')
console.log(winner)
assert.strictEqual(winner, 'Essam')

utils.getWinner = originalGetWinner