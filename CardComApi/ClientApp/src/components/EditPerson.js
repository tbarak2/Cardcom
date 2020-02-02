import React from 'react';

class EditPerson extends React.Component {
    //constructor(props) {
    //    super(props);
    //    this.state = { person: props.person };
    //    console.log(this.state.person.":", props.person);
    //    //this.setState({
    //    //    person: props.person
    //    //})
    //}
    state = {
        check: this.someMethod(this.props.person), p: {} };
    onInputChange = (event) => {
        console.log("test:",event.target.value);
        this.setState({ p:{ idNumber: event.target.value }})
        //this.props.person.idNumber = event.target.value;
    }

    componentwillreceiveprops(person) {
        this.setState({ p: person })
    }
    someMethod() {

        if (this.props.person && this.state.p == null) {
            this.setState({ p: this.props.person})
        }
       
    }

    onFormSubmit = event => {
        //console.log(this.state.term)
        event.preventDefault();
        //this.props.onFormSubmit(this.state.term)
    }
    render() {
        if (this.props.person) {
            return (
                <div>
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <input
                            type="text"
                            value={this.state.p.idNumber}
                            onChange={this.onInputChange}></input>
                    </form>
                </div>
            )
        }
        return <div></div>
    }
        
}

export default EditPerson;