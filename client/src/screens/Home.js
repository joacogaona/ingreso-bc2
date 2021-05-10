import React, { useState } from 'react'
import { Typography, message, Divider } from 'antd'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import API from 'config/api'
const { Title } = Typography

const getInitialState = () => ({
  firstName: null,
  lastName: null,
  flightNumber: null,
  luggage1: null,
  luggage2: null,
  luggage3: null,
  luggageCategoryId1: 1,
  luggageCategoryId2: 1,
  luggageCategoryId3: 1,
})

function Home() {
  const [state, setState] = useState(getInitialState())
  const {
    firstName,
    lastName,
    flightNumber,
    luggage1,
    luggage2,
    luggage3,
    luggageCategoryId1,
    luggageCategoryId2,
    luggageCategoryId3,
  } = state

  const handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await API.createLuggage({
      luggage: [luggage1, luggage2, luggage3],
      luggageCategoryId: [
        luggageCategoryId1,
        luggageCategoryId2,
        luggageCategoryId3,
      ],
      firstName,
      lastName,
      flightNumber,
    })
    Array.from(document.querySelectorAll(`input`)).forEach(
      (input) => (input.value = ``),
    )
    setState({
      firstName: null,
      lastName: null,
      flightNumber: null,
      luggage1: null,
      luggage2: null,
      luggage3: null,
      luggageCategoryId1: 1,
      luggageCategoryId2: 1,
      luggageCategoryId3: 1,
    })
    message.success(`Usuario creado`)
  }

  return (
    <>
      <div style={{ margin: `auto`, width: `80%` }}>
        <Title>Ingrese sus datos y los bultos que va a dejar</Title>

        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              onChange={handleChange}
              value={firstName}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              onChange={handleChange}
              value={lastName}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Numero de vuelo</Form.Label>
            <Form.Control
              type="text"
              name="flightNumber"
              onChange={handleChange}
              value={flightNumber}
              required
            />
          </Form.Group>

          <Form.Group>
            <Divider />

            <Form.Label>Equipaje 1</Form.Label>
            <Form.Control
              type="text"
              name="luggage1"
              onChange={handleChange}
              value={luggage1}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tamaño </Form.Label>
            <Form.Control
              name="luggageCategoryId1"
              onChange={handleChange}
              value={luggageCategoryId1}
              as="select"
            >
              <option value={1}>Grande</option>
              <option value={2}>Pequeño</option>
              <option value={3}>Prenda</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Divider />
            <Form.Label>Equipaje 2</Form.Label>
            <Form.Control
              type="text"
              name="luggage2"
              onChange={handleChange}
              value={luggage2}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tamaño </Form.Label>
            <Form.Control
              name="luggageCategoryId2"
              onChange={handleChange}
              value={luggageCategoryId2}
              as="select"
            >
              <option value={1}>Grande</option>
              <option value={2}>Pequeño</option>
              <option value={3}>Prenda</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Divider />
            <Form.Label>Equipaje 3 </Form.Label>
            <Form.Control
              type="text"
              name="luggage3"
              onChange={handleChange}
              value={luggage3}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tamaño</Form.Label>
            <Form.Control
              name="luggageCategoryId3"
              onChange={handleChange}
              value={luggageCategoryId3}
              as="select"
            >
              <option value={1}>Grande</option>
              <option value={2}>Pequeño</option>
              <option value={3}>Prenda</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Finalizar
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Home
