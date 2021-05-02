import express from 'express'
// import { schemaValidator } from 'middlewares'
import { createLuggage } from 'controllers/luggage'
// import corporationSchemas from 'controllers/corporation/schemas'
const router = express.Router()

router.post(
  `/`,
  //   schemaValidator(corporationSchemas.getCorporations),
  createLuggage,
)

export default router
