import React, { Component } from 'react'

class BootstrapForm extends Component {

    render(){
        return (
            <div className="container">
                <h2>Employee</h2>
                <form>
                    <div className="form-group">
                        {/* <label>Employee Code : </label> */}
                        <input type="text" id="txtEmployeeCode" className="form-control" placeholder="Enter employee code"></input>
                    </div>
                    <div className="form-group">
                        {/* <label>Employee Name : </label> */}
                        <input type="text" id="txtEmployeeName" className="form-control" placeholder="Enter employee name"></input>
                    </div>
                    <div className="form-group">
                        <label>
                            <input type="checkbox"></input> Remember me
                        </label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )    
    }
}

export default BootstrapForm;

/*

If you are new to React and using create-react-app cli setup, run the npm command below to include the latest version of bootstrap.

npm install --save bootstrap
or

npm install --save bootstrap@latest
Then add the following import statement to index.js file. (https://getbootstrap.com/docs/4.4/getting-started/webpack/#importing-compiled-css)

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
or

import 'bootstrap/dist/css/bootstrap.min.css';
don't forget to use className as attribute on target elements (react uses className as attribute instead of class).

*/ 