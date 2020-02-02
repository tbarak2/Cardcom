import React, { useState } from 'react'

const AddPersonForm = props => {
    const initialFormState = { idNumber: '', name: '', email: '', birthDate: '', gender: '', phoneNumber: '' };
    const [person, setPerson] = useState(initialFormState);
    const handleInputChange = (event) => {
        console.log("event:",event)
        const { name, value } = event.target

        setPerson({ ...person, [name]: value })
    };
    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!person.idNumber || !person.name || !person.birthDate) return

                props.addPerson(person)
                setPerson(initialFormState)
            }}
        >
            <label>Id Number</label>
            <input type="text" name="idNumber" value={person.idNumber} onChange={handleInputChange}/>
            <label>Name</label>
            <input type="text" name="name" value={person.name} onChange={handleInputChange} />
            <label>Email</label>
            <input type="text" name="email" value={person.email} onChange={handleInputChange} />
            <label>Birth Date</label>
            <input type="text" name="birthDate" value={person.birthDate} onChange={handleInputChange}/>
            <label>Gender</label>
            <input type="text" name="gender" value={person.gender} onChange={handleInputChange} />
            <label>Phone Number</label>
            <input type="text" name="phoneNumber" value={person.phoneNumber} onChange={handleInputChange} />
            <button>Add new person</button>
        </form>
    )
}

export default AddPersonForm