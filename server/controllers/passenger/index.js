import { Passenger, Luggage } from 'models'
import { successResponse } from 'utils'

export async function getAllPassengers(req, res, next) {
  try {
    const allPassengers = await Passenger.findAll({
      include: [
        {
          association: `luggage`,
        },
      ],
    })
    return successResponse(res, allPassengers)
  } catch (error) {
    return next(error)
  }
}

export async function getPassenger(req, res, next) {
  const { passengerId } = req.params
  try {
    const passenger = await Passenger.findByPk(passengerId, {
      include: [
        {
          association: `luggage`,
          include: [{ association: `category` }],
        },
      ],
    })
    return successResponse(res, passenger)
  } catch (error) {
    return next(error)
  }
}

export async function createPassenger(req, res, next) {
  try {
    const newPassenger = await Passenger.create(req.body)
    return successResponse(res, newPassenger)
  } catch (error) {
    return next(error)
  }
}

export async function destroyPassenger(req, res, next) {
  const { passengerId } = req.params
  try {
    const destroyedPassenger = await Passenger.destroy({
      where: { id: passengerId },
    })
    const destroyedLuggage = await Luggage.destroy({
      where: { passengerId },
    })
    return successResponse(res, destroyedPassenger)
  } catch (error) {
    return next(error)
  }
}
