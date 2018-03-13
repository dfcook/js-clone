const assert = require('./equality-helpers')

const user = {
  name: 'Dan',
  emailAddress: 'foo@bar.com',
  options: {
    showWelcomeMessage: false,
    colourScheme: 'dark'
  },
  lastUsedFiles: [
    '~/js/clone.js',
    '~/csharp/UserContext.cs',
    '~/.eslintrc'
  ]
}

const deepCloneObject = (value) => {
  if (typeof value === 'object') {
    let clone = {}

    Object.keys(value).forEach(key => {
      clone[key] = deepCloneObject(value[key])
    })

    return clone
  } else {
    return value
  }
}

const cloned = deepCloneObject(user)

assert.areSame(user, cloned)