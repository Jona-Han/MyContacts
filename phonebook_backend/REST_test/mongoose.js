const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log("missing args")
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://jwh:${password}@cluster0.x5q1og8.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  Person.find({}).then(result => {
    console.log('Phonebook:')
    result.forEach(note => {
      console.log(`${note.name} ${note.number}`)
    })
    mongoose.connection.close()
  })
} else if (process.argv.length < 5) {
  console.log('Missing name or phone number')
  process.exit(1)
} else {
  const newPerson = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })

  newPerson.save().then(result => {
    console.log(`added ${newPerson.name} ${newPerson.number} to phonebook`)
    mongoose.connection.close()
  })
}
