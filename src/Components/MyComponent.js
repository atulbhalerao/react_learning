import React from 'react'

class MyComponent extends React.Component {
    constructor(props){
        super(props);

        let firstName = this.props.name

        this.state = {
            name : firstName
        }
    }
    render() {
        return <h1>Hello, World! MyComponent {this.state.name}</h1>
    }
}

export default MyComponent