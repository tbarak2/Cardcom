import React, { Component } from 'react';
import PersonList from './PersonList';
import EditPerson from './EditPerson';

export class PeronsData extends Component {
    static displayName = PeronsData.name;

    constructor(props) {
        super(props);
        this.state = { persons: [], loading: true, selectedPerson: null };
    }

    componentDidMount() {
        this.populatePersonsData();
    }

    static renderPersons(persons) {
        return (
            <div>
                <EditPerson person={this.state.selectedPerson} />
                <PersonList onPersonSelect={this.onPersonSelect} persons={persons} />
            </div>

            );
    }

    onPersonSelect = (person) => {
        console.log('from the app ', person);
        this.setState({ selectedPerson: person });
    }

    render() {
        //let contents = this.state.loading
        //    ? <p><em>Loading...</em></p>
        //    : PeronsData.renderPersons(this.state.persons);
        

        //return (
        //    <div>
        //        <h1 id="tabelLabel">Data Admin</h1>
        //        <p>Here you can check all requestd apis.</p>
        //        {contents}
        //    </div>
        //);\
        return (
            <div>
                <div>
                    <EditPerson person={this.state.selectedPerson} />
                    <PersonList onPersonSelect={this.onPersonSelect} persons={this.state.persons} />
                </div>
            </div>);
    }

    async populatePersonsData() {
        const response = await fetch('api/v1/Person');
        const data = await response.json();
        console.log("data is:",data)
        this.setState({ persons: data, loading: false });
    }
}
