import React, { Component } from 'react';

class EmployeeList extends Component{

    constructor(){
        super();

        this.state = {
            data : [
                {
                    id: 101,
                    empcode : 'A001',
                    empname : 'Atul Bhalerao'
                },
                {
                    id: 102,
                    empcode : 'A002',
                    empname : 'Sarvesh Atale'
                },
                {
                    id: 103,
                    empcode : 'A003',
                    empname : 'Sneha V.'
                },
                {
                    id: 104,
                    empcode : 'A004',
                    empname : 'Rohit Parmar'
                },
                {
                    id: 105,
                    empcode : 'A005',
                    empname : 'Vishakha C.'
                }
            ]
        }
    }

    render(){
        return(
            <table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Employee Code</th>
                        <th>Employee Name</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {/* {
                        this.state.data.forEach(element => {
                            <tr>
                                <td> {element.id} </td>
                                <td> {element.empcode} </td>
                                <td> {element.empname} </td>
                            </tr>
                        })
                    } */}
                    {
                        this.state.data.map((person, i) => 
                            <tr>
                                <td> {person.id} </td>
                                <td> {person.empcode} </td>
                                <td> {person.empname} </td>
                            </tr>
                            // <TableRow key = {i} data = {person} />
                    )}
                </tbody>
            </table>
        );        
    }
    
}

export default EmployeeList