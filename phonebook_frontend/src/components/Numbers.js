import personsService from "../services/persons"
const Numbers = ({ people, setPersons, setToShow }) => {
    const handleDelete = id => {
        const toDelete = people.find(person => person.id === id)
        if (window.confirm(`Delete ${toDelete.name}?`)) {
            personsService
                .remove(id)
                .then(x => {
                    const newPeople = people.filter(person => person.id !== id)
                    setPersons(newPeople)
                    setToShow(newPeople)
                })
                .catch(error => {
                    console.log(error.response.data.error)
                })
        }
    }
    return (
        people.map(person =>
            <div key={person.id}>
                {person.name} {person.number} <button onClick={() => handleDelete(person.id)}>Delete</button>
            </div>
        )
    )
}

export default Numbers