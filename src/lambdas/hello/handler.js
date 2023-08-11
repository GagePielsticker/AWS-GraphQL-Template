const { whatsMyName } = require('../utils/response')
exports.handler = async (event, context, callback) => {
  const name = process.env.MY_NAME
  const lastname = whatsMyName()
  const data = {
    name: `My name is ${name} ${lastname}`
  }

  return callback(null, data)
}
