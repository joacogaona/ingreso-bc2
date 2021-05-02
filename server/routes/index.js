import express from 'express'
import passengerRouter from './passenger'
import luggageRouter from './luggage'
const router = express.Router()
router.use(`/passengers`, passengerRouter)
router.use(`/luggage`, luggageRouter)

export default router
