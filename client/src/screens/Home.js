import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Typography, Button } from 'antd'
import API from '../config/api'

const getInitialState = () => ({
  passengers: [],
})
const { Title, Text } = Typography

function Home() {
  const [state, setState] = useState(getInitialState())
  const history = useHistory()
  const { passengers } = state
  async function fetchAll() {
    try {
      const passengers = await API.getAllPassengers()
      setState({ passengers })
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchAll()
  }, [])

  return (
    <div>
      <Title>Listado de pasajeros</Title>
      <div
        style={{
          width: `50%`,
          justifyContent: `space-between`,
          display: `flex`,
          borderBottom: `1px dashed black`,
          marginBottom: `1%`,
        }}
      >
        <div
          style={{
            width: `20%`,
          }}
        >
          <Text>Nombre</Text>
        </div>
        <div
          style={{
            width: `20%`,
          }}
        >
          <Text>Bultos</Text>
        </div>
        <div></div>
      </div>
      {passengers.map((passenger) => (
        <div key={passenger.id}>
          <div
            style={{
              width: `50%`,
              justifyContent: `space-between`,
              display: `flex`,
            }}
          >
            <div
              style={{
                width: `20%`,
              }}
            >
              <Text>{`${passenger.firstName} ${passenger.lastName}`}</Text>
            </div>
            <div
              style={{
                width: `20%`,
                marginLeft: `5%`,
              }}
            >
              <Text>{`${passenger.luggage.length}`}</Text>
            </div>
            <Button
              onClick={() => {
                history.push(`/${passenger.id}`)
              }}
            >
              Ver
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
