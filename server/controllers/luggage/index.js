import { Luggage } from 'models'
import { successResponse } from 'utils'

export async function createLuggage(req, res, next) {
  console.log(req.body, `aca`)
  try {
    const newLuggae = await Luggage.create(req.body)
    return successResponse(res, newLuggae)
  } catch (error) {
    return next(error)
  }
}
