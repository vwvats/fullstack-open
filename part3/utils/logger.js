const morgan = require('morgan')

// custom token
morgan.token('requestBody', (req) => JSON.stringify(req.body))

module.exports = morgan(
  ':method :url :status :res[content-length] - :response-time ms :requestBody'
)
