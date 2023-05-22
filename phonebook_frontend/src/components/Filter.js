import { useState } from "react"

const Filter = ({persons,setToShow}) => {
    const [newFilter, setNewFilter] = useState('')

    const handleFilterChange = event => {
        setNewFilter(event.target.value)
        const filteredPersons = persons.filter(person => person.name.includes(event.target.value))
        setToShow(filteredPersons)
    }

    return (
      <div>
        Filter shown with: <input value={newFilter} onChange={handleFilterChange} />
      </div>
    )
}
export default Filter