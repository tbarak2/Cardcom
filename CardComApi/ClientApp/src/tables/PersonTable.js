import React from 'react'

const PersonTable = (props) => (
    <table>
        <thead>
            <tr>
                <th>Id Number</th>
                <th>Name</th>
                <th>Email</th>
                <th>Birth Date</th>
                <th>Gender</th>
                <th>Phone Number</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {props.persons.length > 0 ? (
                props.persons.map(person => (
                    <tr key={person.idNumber}>
                        <td>{person.idNumber}</td>

                        <td>{person.name}</td>
                        <td>{person.email}</td>
                        <td>{person.birthdate}</td>
                        <td>{person.gender}</td>
                        <td>{person.number}</td>
                        <td>
                            <button className="button muted-button">Edit</button>
                            <button className="button muted-button">Delete</button>
                        </td>
                    </tr>))) : (
                    <tr>
                        <td colSpan={3}>No Data</td>
                    </tr>)}
        </tbody>
    </table>
)

export default PersonTable;