const assert = require('./equality-helpers')

const user = {
  name: 'Dan',
  emailAddress: 'foo@bar.com'
}

const cloned = user

assert.areSame(user, cloned)

cloned.name = 'Daniel'

assert.areDifferent(user, cloned)
