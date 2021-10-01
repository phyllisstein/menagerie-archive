if (process.env.NODE_ENV === 'production') {
  module.exports = require('./config/build/production').toConfig()
} else if (process.env.NODE_ENV === 'staging') {
  module.exports = require('./config/build/staging').toConfig()
} else {
  module.exports = require('./config/development').toConfig()
}
