const assert = require('./equality-helpers')

const user = {
  name: 'Dan',
  emailAddress: 'foo@bar.com',
  options: {
    showWelcomeMessage: false,
    colourScheme: 'dark'
  }
}

const clone = (value) => { return { ...value } }

const cloned = clone(user)

assert.areSame(user, cloned)

cloned.options.colourScheme = 'light'

assert.areDifferent(user, cloned)
