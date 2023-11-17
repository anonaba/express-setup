const express = require('express')
const router = express.Router()
const { getAllTours, createTour, getTour, updateTour, deleteTour, checkId, checkBody } = require('../controllers/tourController')

// param Middleware
router.param('id', checkId)

router.route('/').get(getAllTours).post(checkBody, createTour)
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour)

module.exports = router
