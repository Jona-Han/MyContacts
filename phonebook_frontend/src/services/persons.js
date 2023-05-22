import axios from "axios"
const baseUrl = '/api/persons'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const response = axios.get(baseUrl)
  return response.then(response => response.data)
}

const create = async newPerson => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newPerson, config)
  return response.data
}

const remove = id => {
  const response = axios.delete(`${baseUrl}/${id}`)
  return response.then(response => response.data)
}

const update = (newPerson) => {
  const response = axios.put(`${baseUrl}/${newPerson.id}`, newPerson)
  return response.then(response => response.data)
}


export default { getAll, create, remove, update, setToken}