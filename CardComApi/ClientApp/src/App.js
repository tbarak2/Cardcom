import React, { useState, useEffect } from "react";
import { useAlert } from 'react-alert'
import AddPersonForm from './forms/AddPersonForm'
import EditPersonForm from './forms/EditPersonForm'
import PersonTable from './tables/PersonTable'
import axios from 'axios';  

const App = () => {
    const alert = useAlert()
    const initialFormState = { id: '', updatePersonidNumber: '', name: '', email: '', birthdate: '', gender: '', number: '' };
    const initialErrorState = { idNumber: ''};
    const [isLoading, setIsLoading] = useState(true);
    const [persons, setPersons] = useState([]);
    const [editing, setEditing] = useState(false)
    const [currentPerson, setCurrentPerson] = useState(initialFormState) 
    const [errorMessages, setErrorMessage] = useState(initialErrorState) 
    useEffect(() => {
        const GetData = async () => {
            const result = await axios('api/v1/Person');
            console.log("results", result);
            setPersons(result.data);
            setIsLoading(false);
        };  
        GetData();
    }, []); 

    const editRow = person => {
        setErrorMessage(initialErrorState);
        setEditing(true)

        setCurrentPerson({id:person.id, idNumber: person.idNumber, name: person.name, email: person.email, birthdate: person.birthdate, gender: person.gender, number:person.number })
    }

    const addPerson = person => {
            //setErrorMessage(initialErrorState);
        if (persons.map(p => person.idNumber === p.idNumber)) {
            setErrorMessage({ ...errorMessages, ['idNumber']: 'Id already exist!!' });
            alert.show('Id number already exist!!')
        }
        else {
            axios.post("https://localhost:44334/api/v1/Person", person)
                .then((result) => {
                    setPersons([...persons, person])
                });
        }

       
    }

    const deletePerson = id => {
        axios.delete("https://localhost:44334/api/v1/Person/" +id )
            .then((result) => {
                setPersons(persons.filter(person => person.id !== id))
            });  
    }

    const updatePerson = (id, updatedPerson) => {
        setEditing(false)
        axios.put("https://localhost:44334/api/v1/Person/" + id, updatedPerson)
            .then((result) => {
                setPersons(persons.map(person => (person.id === id ? updatedPerson : person)))
            });  
    }

    //const personValidator(checkedPerson) => {
    //    setErrorMessage(initialErrorState);
    //    if (persons.map(person => person.idNumber === checkedPerson.idNumber))
    //}

    return (
        <div className="container">

            <div className="flex-row">
                {editing ? (
                    <div>
                        <h2>Edit Person</h2>
                        <EditPersonForm
                            editing={editing}
                            setEditing={setEditing}
                            currentPerson={currentPerson}
                            updatePerson={updatePerson}
                        />
                    </div>
                ):(
                <div>
                    <h2>Add Person</h2>
                            <AddPersonForm addPerson={addPerson} />
                </div>
                )}
                {isLoading && <p>Wait I'm Loading data for you</p>}
                <div className="flex-large">
                    <h2>View Persons</h2>
                    <PersonTable persons={persons} editRow={editRow} deletePerson={deletePerson} />
                </div>
            </div>
        </div>
    )
}

export default App