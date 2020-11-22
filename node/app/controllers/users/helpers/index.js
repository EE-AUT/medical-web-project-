const { createItemInDb } = require('./createItemInDb')
const { createSampleInDb } = require('./createSampleInDb')
const { predict } = require('./predict')
const { addFileNameToReq } = require('./addFileNameToReq')

module.exports = {
  createItemInDb,
  createSampleInDb,
  predict,
  addFileNameToReq
}
