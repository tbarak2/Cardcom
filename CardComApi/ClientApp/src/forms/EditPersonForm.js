import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import validator from 'validator';

const EditPersonForm = props => {
    const [person, setPerson] = useState(props.currentPerson)
    const [startDate, setStartDate] = useState(new Date(props.currentPerson.birthdate));

    const handleInputChange = event => {
        const { name, value } = event.target

        setPerson({ ...person, [name]: value })
    }
    const handleDateChange = date => {
        setStartDate(date);
        //selectedDate = date
        setPerson({ ...person, ['birthdate']: formatDate(date) + "T00:00:00" })
    }

    const handleGenderChange = event => {
        setPerson({ ...person, ['gender']: event.target.value })
    }

    const formatDate = (date) => {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                props.updatePerson(person.id, person)
            }}
        >
            <label>Id Number</label>
            <input type="text" name="idNumber" value={person.idNumber} onChange={handleInputChange} />
            <label>Name</label>
            <input type="text" name="name" value={person.name} onChange={handleInputChange} />
            <label>Email</label>
            <input type="text" name="email" value={person.email} onChange={handleInputChange} />
            <label>Birth Date</label>
            <DatePicker name="birthdate" dateFormat="MM/dd/yyyy" selected={startDate} onChange={handleDateChange} />
            <label>Gender</label>
            <select type="text" name="gender" value={person.gender} onChange={handleGenderChange} >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <label>Phone Number</label>
            <input type="text" name="number" value={person.number} onChange={handleInputChange} />
            <button>Update user</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    )
}

export default EditPersonForm
