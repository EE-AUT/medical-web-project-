const express = require('express')
const router = express.Router()
require('../../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' }).single('file')
const { roleAuthorization } = require('../../controllers/auth')

const {
  getUsers,
  createSample,
  getUser,
  updateUser,
  deleteUser
} = require('../../controllers/users')

const {
  validateCreateUser,
  validateGetUser,
  validateUpdateUser,
  validateDeleteUser
} = require('../../controllers/users/validators')

/*
 * Users routes
 */

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getUsers
)

/*
 * Create new item route
 */
router.post(
  '/samples',
  // requireAuth,
  // roleAuthorization(['admin']),
  (req, res, next) => {
    upload(req, res, (err) => {
      if (err) handleError(res, buildErrObject(422, 'UNEXPECTED_FILE_KEY'))
      else next()
    })
  },
  trimRequest.all,
  // validateCreateUser,
  createSample
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetUser,
  getUser
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateUser,
  updateUser
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteUser,
  deleteUser
)

module.exports = router
