import React from 'react';
import PersonItem from './PersonItem';

const PersonList = ({ persons, onPersonSelect }) => {
    const renderList = persons.map((person) => {
        return <PersonItem key={person.idNumber} onPersonSelect={onPersonSelect} person={person} />;
    });

    return (
        <div className="">{renderList}</div>
    );
};

export default PersonList;