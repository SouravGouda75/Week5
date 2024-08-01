const express = require('express')
const { Create,test, Delete, Update, Read } = require('../controllers/controls')

const router = express.Router()

router.route('/').get(Read).post(Create)
router.route('/delete').post(Delete)
router.route('/update').post(Update)

module.exports = router;