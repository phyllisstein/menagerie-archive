let client

if (process.env.NODE_ENV === 'production') {
    client = require('./config/build/production.cjs').client
} else if (process.env.NODE_ENV === 'staging') {
    client = require('./config/build/staging.cjs').client
} else {
    client = require('./config/build/development.cjs').client
}

module.exports = client.toConfig()
