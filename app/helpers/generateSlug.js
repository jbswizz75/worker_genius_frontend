const slugify = require('slugify')

const GenerateSlug = function (title) {
  // try catch
  if (typeof title === 'string') {
    return slugify(title.replace(/[!@#$%^&*(),.?":{}|<>]/g, '')).toLowerCase()    
  }
}

module.exports = GenerateSlug
