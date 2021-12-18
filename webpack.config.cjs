let client

if (process.env.NODE_ENV === 'production') {
    client = require('./config/build/production.mjs').client
} else if (process.env.NODE_ENV === 'staging') {
    client = require('./config/build/staging.mjs').client
} else {
    client = require('./config/build/development.mjs').client
}

module.exports = client.toConfig()
