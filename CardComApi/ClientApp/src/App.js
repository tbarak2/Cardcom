import React, { useState, useEffect } from "react";
import AddPersonForm from './forms/AddPersonForm'
import PersonTable from './tables/PersonTable'
import axios from 'axios';  

const App = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        const GetData = async () => {
            const result = await axios('api/v1/Person');
            console.log("results", result);
            setPersons(result.data);
            setIsLoading(false);
        };  
        GetData();
    }, []); 
    //useEffect(() => {
    //    fetch(
    //        'api/v1/Person',
    //        {
    //            method: "GET",
    //            //headers: new Headers({
    //            //    Accept: "application/vnd.github.cloak-preview"
    //            //})
    //        }
    //    )
    //        .then(res => res.json())
    //        .then(response => {
    //            console.log("response:",response);
    //            setPersons(response);
    //            setIsLoading(false);
    //        })
    //        .catch(error => console.log(error));
    //});
    const addPerson = person => {
        axios.post("https://localhost:44334/api/v1/Person", person)
            .then((result) => {
                setPersons([...persons, person])
        });  
       
    }
    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <h2>Add user</h2>
                    <AddPersonForm addPerson={addPerson} />
                </div>
                {isLoading && <p>Wait I'm Loading data for you</p>}
                <div className="flex-large">
                    <h2>View users</h2>
                    <PersonTable persons={persons} />
                </div>
            </div>
        </div>
    )
}

export default App