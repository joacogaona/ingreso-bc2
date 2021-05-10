/* eslint-disable max-len */
import axios from 'axios'

import { API_BASE_URL } from './constants'

const API = {}
//GENERIC
API.getAllPassengers = async () => {
  const {
    data: { data, error, success },
  } = await axios.get(`${API_BASE_URL}/passengers`)
  if (success) {
    return data
  } else {
    return Promise.reject(error)
  }
}
API.getPassenger = async (passengerId) => {
  const {
    data: { data, error, success },
  } = await axios.get(`${API_BASE_URL}/passengers/${passengerId}`)
  if (success) {
    return data
  } else {
    return Promise.reject(error)
  }
}

API.destroyPassenger = async (passengerId) => {
  const {
    data: { data, error, success },
  } = await axios.delete(`${API_BASE_URL}/passengers/${passengerId}`)
  if (success) {
    return data
  } else {
    return Promise.reject(error)
  }
}

API.createPassenger = async (payload) => {
  const {
    data: { data, error, success },
  } = await axios.post(`${API_BASE_URL}/passengers`, payload)
  if (success) {
    return data
  } else {
    return Promise.reject(error)
  }
}
API.createLuggage = async (payload) => {
  const {
    data: { data, error, success },
  } = await axios.post(`${API_BASE_URL}/luggage`, payload)
  if (success) {
    return data
  } else {
    return Promise.reject(error)
  }
}
export default API
