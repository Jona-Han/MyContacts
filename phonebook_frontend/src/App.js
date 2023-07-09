import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import personsService from './services/persons'
import loginService from './services/login'
import "./css/App.css"

const App = () => {
  const [persons, setPersons] = useState([])
  const [peopleToShow, setToShow] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedPhonebookUser', JSON.stringify(user)
      ) 
      personsService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  useEffect(() => {
    personsService
      .getAll()
      .then(allPersons => {
        setPersons(allPersons)
        setToShow(allPersons)
      })
      .catch(error => {
        console.log(error.response.data.error)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      personsService.setToken(user.token)
    }
  }, [])

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  )

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <div className="error-message">
        <Notification message={errorMessage} />
      </div>
      {!user && (
        <div className="login-form">
          {loginForm()}
        </div>
      )}
      {user && (
        <div>
          <div className="logged-in-user">
            <p>{user.name} logged in</p>
          </div>
          <div className="filter">
            <Filter persons={persons} setToShow={setToShow} />
          </div>
          <h2>Add a new contact</h2>
          <div className="person-form">
            <PersonForm persons={persons} setPersons={setPersons} setToShow={setToShow} />
          </div>
          <h2>Numbers</h2>
          <div className="numbers">
            <Numbers people={peopleToShow} setPersons={setPersons} setToShow={setToShow} />
          </div>
        </div>
      )}
    </div>
  );
}
export default App