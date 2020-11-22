const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const { createSampleInDb, predict, addFileNameToReq } = require('./helpers')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createSample = async (req, res) => {
  try {
    // let user = req.user
    req = await addFileNameToReq(req, 'file')
    const file = req.file
    req = matchedData(req)
    req.file = file
    req.score = await predict(req.file)
    const item = await createSampleInDb(req)
    item.path = `img/${file}`
    // user.docs.push(item._id)
    // await user.save()
    res.status(201).json({ 'new item': item })
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createSample }
