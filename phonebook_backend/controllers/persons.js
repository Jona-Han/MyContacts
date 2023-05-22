const personsRouter = require('express').Router()
const Person = require('../models/person')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  }
  return null
}

personsRouter.get('/', async (request, response) => {
  const persons = await Person.find({}).populate('user', {username: 1, name: 1})
  
  response.json(persons)
})


personsRouter.get('/:id', async (request, response, next) => {
  const person = await Person.findById(request.params.id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

personsRouter.delete('/:id', async (request, response) => {
  await Person.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

personsRouter.post('/', async (request, response) => {
  const body = request.body
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET)
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token invalid' })
  }
  const user = await User.findById(decodedToken.id)

  const person = new Person({
    name: body.name,
    number: body.number,
    user: user.id
  })
  
  const savedPerson = await person.save()
  user.persons = user.persons.concat(savedPerson._id)
  await user.save()
  response.status(201).json(savedPerson)
})

personsRouter.post('/:id', async (request, response, next) => {
  const {name, number} = request.body

  Person.findByIdAndUpdate(request.params.id,
    {name, number}, 
    { new: true, runValidators: true, context: 'query' })
    .then(newPerson => {
      response.json(newPerson)
    })
    .catch(error => next(error))
})

module.exports = personsRouter