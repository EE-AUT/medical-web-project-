const model = require('../../../models/sample')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Creates a new item in database
 * @param {Object} req - request object
 */
const createSampleInDb = ({ file = '', score = '' }, userId = '') => {
  return new Promise((resolve, reject) => {
    const sample = new model({
      file,
      score,
      userId
    })
    sample.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      item = JSON.parse(JSON.stringify(item))
      resolve(item)
    })
  })
}

module.exports = { createSampleInDb }
