import React from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    add = (employee) => {
        const employees = this.state.employees;
        employees.push(employee);
        this.setState({ employees: employees });
    }

    remove = (email) => {
        let employees = this.state.employees;
        employees = employees.filter(employee => employee.email !== email);
        this.setState({ employees: employees });
    }

    render() {
        return (
            <div className="container mx-auto">
                <div className="lg:flex">
                    <div className="lg:w-1/4">
                        <EmployeeForm add={this.add}/>
                    </div>
                    <div className="lg:w-3/4">
                        <EmployeeList employees={this.state.employees} remove={this.remove} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Employee;
