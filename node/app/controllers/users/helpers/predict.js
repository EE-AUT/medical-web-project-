const model = require('../../../models/sample')
const { buildErrObject } = require('../../../middleware/utils')
var cmd = require('node-cmd')

/**
 * Creates a new item in database
 * @param {Object} req - request object
 */
const predict = (file = '') => {
  return new Promise((resolve, reject) => {
    cmd.get(
      `cd prediction && source env/bin/activate && python iderm.py ../uploads/${file} && deactivate`,
      (err, data, stderr) => {
        // console.log('err ', err)
        let lines = data.split('\n')
        // lines[1]*100;
        // console.log('stderr ', stderr)
        resolve(lines[1] * 100)
      }
    )
  })
}

module.exports = { predict }
