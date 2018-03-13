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
  if (Array.isArray(value)) {
    const clone = new Array(value.length)

    value.forEach((item, index) => {
      clone[index] = deepCloneObject(item)
    })

    return clone
  } else if (typeof value === 'object') {
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

cloned.lastUsedFiles.splice(0, 1)

assert.areDifferent(user, cloned)
