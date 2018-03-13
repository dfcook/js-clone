const assert = require('assert')

const deepEqual = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2)

const compare = (obj1, obj2, comparer, type) => {
  const comparison = comparer()

  if (!comparison) {
    console.log(`${type} check failed!`)
    console.log(obj1)
    console.log(obj2)
  } else {
    console.log(`${type} check passed`)
  }

  return comparison
}

const areDifferent = (obj1, obj2) =>
  compare(obj1, obj2, () => !deepEqual(obj1, obj2), 'Different')

const areSame = (obj1, obj2) =>
  compare(obj1, obj2, () => deepEqual(obj1, obj2), 'Same')

module.exports = {
  areDifferent,
  areSame
}
