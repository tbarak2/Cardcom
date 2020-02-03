import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import validator from 'validator';
import { useAlert } from 'react-alert';
import { inputValidator } from '../utils/utils'

const AddPersonForm = props => {
    const initialFormState = { idNumber: '', name: '', email: '', birthdate: '', gender: '', number: '' };
    const initialErrorFormState = { email: '', number: '', name: '', date: '', idnumber: ''};
    const alert = useAlert()
    const [person, setPerson] = useState(initialFormState);
    const [errors, setError] = useState(initialErrorFormState)
    const [startDate, setStartDate] = useState(new Date());

    const handleInputChange = (event) => {
        console.log("event:",event)
        const { name, value } = event.target

        setPerson({ ...person, [name]: value })
    };
    const handleGenderChange = event => {
        setPerson({ ...person, ['gender']: event.target.value })
    }
    const handleDateChange = date => {
        setStartDate(date);
        //selectedDate = date
        setPerson({ ...person, ['birthdate']: formatDate(date)+"T00:00:00"})
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
    //const inputValidator = (person) => {
    //    if (!person.idNumber) {
    //        setError({ ...errors, ['idNumber']: 'Id number is missing' });
    //        alert.show('Id number is missing');
    //        return false;
    //    }
    //    if (!person.name) {
    //        setError({ ...errors, ['nme']: 'Name is missing' });
    //        alert.show('Name is missing');
    //        return false;
    //    }
       
    //}
    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                //if (!person.idNumber || !person.name || !person.birthdate) {

                //    if (!validator.isEmail(person.email)) {
                //        setError({ ...errors, ['email']: 'Email address not valid' });
                //        return;
                //    }
                //}
                var messageError = inputValidator(person);
                if (messageError) {
                    alert.show(messageError);
                    return;
                }
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
            <label>{errors.email}</label>
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
            <button>Add new person</button>
        </form>
    )
}

export default AddPersonForm