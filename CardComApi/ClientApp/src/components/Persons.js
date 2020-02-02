import React, { Component } from 'react';

export class PeronsData extends Component {
    static displayName = PeronsData.name;

    constructor(props) {
        super(props);
        this.state = { persons: [], loading: true };
    }

    componentDidMount() {
        this.populatePersonsData();
    }

    onPersonEditSelect = (video) => {
        console.log('from the app ', person);
        this.setState({ selectedPerson: person });
    }

    static renderPersonsTable(persons) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
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
                    {persons.map(person =>
                        <tr key={person.idNumber}>
                            <td>{person.idNumber}</td>

                            <td>{person.name}</td>
                            <td>{person.email}</td>
                            <td>{person.birthdate}</td>
                            <td>{person.gender}</td>
                            <td>{person.number}</td> 
                            <td>
                                {/*<button type="button" className="btn btn-default btn-sm">
                                    <span className="glyphicon glyphicon-pencil"></span>Edit
                                    </button>
                                 <button type="button" className="btn btn-default btn-sm">
                                   <span className="glyphicon glyphicon-pencil"></span>Delete
                                </button>*/}
                            </td>
                        </tr>
                    )}
                </tbody>
                <div className="row">
                    <button> Click </button>
                    <button> Click2 </button>
                </div>
            </table>    
            
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : PeronsData.renderPersonsTable(this.state.persons);

        return (
            <div>
                <h1 id="tabelLabel">Data Admin</h1>
                <p>Here you can check all requestd apis.</p>
                {contents}
            </div>
        );
    }

    async populatePersonsData() {
        const response = await fetch('api/v1/Person');
        const data = await response.json();
        this.setState({ persons: data, loading: false });
    }
}
