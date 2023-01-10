import react, { Component } from 'react';
                
                
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    birthday = () => {
        this.setState({ age: this.state.age + 1 });
    }
    
    render() {
        return (
            <div className="card">
                <h3>{this.props.name.last}, {this.props.name.first}</h3>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.color}</p>
                <button onClick={this.birthday}>Birthday button for {this.props.name.first} {this.props.name.last}</button>
            </div>
        );
    }
}

export default PersonCard;