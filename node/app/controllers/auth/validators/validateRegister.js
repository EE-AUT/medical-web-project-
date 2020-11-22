const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates register request
 */
const validateRegister = [
  check('name')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('email')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isEmail()
    .withMessage('EMAIL_IS_NOT_VALID'),
  check('password')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isLength({
      min: 5
    })
    .withMessage('PASSWORD_TOO_SHORT_MIN_5'),
  check('role')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')

    .isIn(['user', 'doctor'])
    .withMessage('VALID_VALUES: user, doctor')

    .custom((val, { req }) => {
      if (val === 'doctor') {
        if (req.body.hasOwnProperty('doctorId')) {
          return req.body.doctorId !== ''
        }
        return false
      }
      return true
    })
    .withMessage('with role doctor, you shoud mention doctorId'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateRegister }
