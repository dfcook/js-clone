const assert = require('./equality-helpers')

const user = {
  name: 'Dan',
  emailAddress: 'foo@bar.com'
}

const clone = (value) => { return { ...value } }

const cloned = clone(user)

assert.areSame(user, cloned)

cloned.name = 'Daniel'

assert.areDifferent(user, cloned)
