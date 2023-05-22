import { useState } from "react"
import personsService from '../services/persons'

const PersonForm = ({ persons, setPersons, setToShow }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  const nameAlreadyExists = () => {
    return persons.some(person => person.name === newName) ? true : false
  }

  const handleUpdate = () => {
    const personToUpdate = persons.find(person => person.name === newName)
    const newPerson = { ...personToUpdate, number: newNumber }
    personsService
      .update(newPerson)
      .then(newP => {
        setPersons(persons.map(person => person.name !== newName ? person : newP))
        setToShow(persons.map(person => person.name !== newName ? person : newP))
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.log(error.response.data.error)
      })
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (nameAlreadyExists()) {
      if (window.confirm(`${newName} is already added to the phonebook. Replace the old number with the new number?`))
        handleUpdate()
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      personsService
        .create(personObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setToShow(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          console.log(error.response.data.error)
        })
    }
  }

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>number: <input
        value={newNumber}
        onChange={handleNumberChange}
      />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm