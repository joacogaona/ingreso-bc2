import express from 'express'
// import { schemaValidator } from 'middlewares'
import {
  getAllPassengers,
  getPassenger,
  createPassenger,
  destroyPassenger,
} from 'controllers/passenger'
// import corporationSchemas from 'controllers/corporation/schemas'
const router = express.Router()

router.get(
  `/`,
  //   schemaValidator(corporationSchemas.getCorporations),
  getAllPassengers,
)
router.get(
  `/:passengerId`,
  //   schemaValidator(corporationSchemas.getCorporations),
  getPassenger,
)
router.post(
  `/`,
  //   schemaValidator(corporationSchemas.getCorporations),
  createPassenger,
)
router.delete(
  `/:passengerId`,
  //   schemaValidator(corporationSchemas.getCorporations),
  destroyPassenger,
)

export default router
