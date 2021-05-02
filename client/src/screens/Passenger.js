import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { Typography, Button } from 'antd'
import API from '../config/api'
const { Title, Text } = Typography
const getInitialState = () => ({
  passenger: null,
})
function Passenger() {
  const [state, setState] = useState(getInitialState())
  const { passengerId } = useParams()
  const { passenger } = state
  const history = useHistory()
  async function fetchPassenger() {
    try {
      const passenger = await API.getPassenger(passengerId)
      setState({ passenger })
    } catch (e) {
      console.log(e)
    }
  }

  async function deletePassenger() {
    try {
      const passenger = await API.destroyPassenger(passengerId)
      setState({ passenger: null })
      history.push(`/`)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchPassenger()
  }, [])

  return (
    <div>
      <div>
        <div style={{ marginBottom: `2%` }}>
          <Text>
            Pasajero:{` `}
            {passenger != null
              ? `${passenger.firstName} ${passenger.lastName}`
              : ``}
          </Text>
          <Button
            onClick={() => {
              deletePassenger()
            }}
          >
            Retirar todo
          </Button>
        </div>
        <div
          style={{
            display: `flex`,
            justifyContent: `space-between`,
            width: `30%`,
            borderBottom: `1px dashed black`,
          }}
        >
          <Text>Equipaje</Text>
          <Text>Descripcion</Text>
          <Text>Categoria</Text>
        </div>
        {passenger != null
          ? passenger.luggage.map((luggage) => {
              return (
                <div
                  key={luggage.id}
                  style={{
                    display: `flex`,
                    justifyContent: `space-between`,
                    width: `30%`,
                  }}
                >
                  <Text>{luggage.name}</Text>
                  <Text>{luggage.description}</Text>
                  <Text>{luggage.luggageCategory.name}</Text>
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default Passenger
