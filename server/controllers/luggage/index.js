import { Passenger, Luggage } from 'models'

import { successResponse } from 'utils'

export async function createLuggage(req, res, next) {
  try {
    const {
      luggage,
      luggageCategoryId,
      firstName,
      lastName,
      flightNumber,
    } = req.body

    const allLuggage = []
    luggage.map((oneLuggage, i) => {
      if (oneLuggage != null) {
        allLuggage.push({
          luggageCategoryId: luggageCategoryId[i],
          name: oneLuggage,
        })
      }
    })
    const newPassenger = await Passenger.create({
      firstName,
      lastName,
      flightNumber,
    })

    const passenger = await Passenger.findOne({
      where: { firstName, lastName, flightNumber },
    })

    allLuggage.map(luggage => {
      luggage.passengerId = passenger.id
    })

    const newLuggage = Luggage.bulkCreate(allLuggage)

    return successResponse(res, newLuggage)
  } catch (error) {
    return next(error)
  }
}
