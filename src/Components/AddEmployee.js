import React, { Component } from 'react'

class AddEmployee extends Component{
    
    constructor(props)
    {
        super();
        this.state = {
            empcode : '',
            empname : ''
        }
        
    };

    updateControlValue= e => this.setState({ [e.target.name]: e.target.value })

    render()
    {
        console.table(this.state);
        return (
            <div>
                <h3>Add Employee</h3>
                <label>Employee Code : </label>
                <input type="text" id="txtEmployeeCode" value={ this.state.empcode } onChange={this.updateControlValue.bind(this)}></input>
                <br></br>
                <label>Employee Name : </label>
                <input type="text" id="txtEmployeeName" value={ this.state.empcode } onChange={this.updateControlValue.bind(this)}></input>
                <br></br>
                <button type="submit" >Submit</button>
            </div>
        )
    }
}

export default AddEmployee