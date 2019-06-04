const router = require('express').Router()
const HealthCheckController = require('../controllers/healthcheck-controller')

router.get('/', HealthCheckController.status)

module.exports = router
