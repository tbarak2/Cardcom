import React from 'react';
//import './PersonItem.css';
const PersonItem = ({ person, onPersonSelect }) => {
    console.log(person)
    return (
        <div className="card" onClick={() => onPersonSelect(person)}>

            <title>Id Number:</title>
            <p>{person.idNumber}</p>
            <p>{person.name}</p>
            <p>{person.email}</p>
            <p>{person.birthdate}</p>
            <p>{person.gender}</p>
            <p>{person.number}</p> 
        </div>
    );
};

export default PersonItem;

