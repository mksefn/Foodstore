const express = require('express')
const { userList } = require('../controllers/userControllers')
const { protect, adminCheck } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/users').get(protect, adminCheck, userList)

module.exports = router