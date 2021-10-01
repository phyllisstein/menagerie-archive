let client

if (process.env.NODE_ENV === 'production') {
  client = require('./config/build/production').client
} else if (process.env.NODE_ENV === 'staging') {
  client = require('./config/build/staging').client
} else {
  client = require('./config/development').client
}

module.exports = client.toConfig()
