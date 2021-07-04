import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class EmployeeList extends React.Component {
    sendMail = (email) => {
        window.location = `mailto:${email}`;
    }

    render() {
        const employees = this.props.employees;
        return (
            <div>
                <h2 className="text-lg">Employees</h2>
                <table className="table-fixed bg-blue-50">
                    <thead>
                        <tr>
                            <th className="w-1/3">Name</th>
                            <th className="w-1/5">Phone</th>
                            <th className="w-1/5">Email</th>
                            <th className="w-1/6">Birthdate</th>
                            <th className="w-1/4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees && employees.map((employee, key) => {
                            return (
                                <tr key={key} className="table-row hover:bg-blue-100">
                                    <td>{employee.name}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.birthdate}</td>
                                    <td className="py-2">
                                        <button className="bg-green-300 rounded px-1 border mx-1 hover:bg-green-600 hover:text-white" onClick={() => {
                                            this.sendMail(employee.email);
                                        }}>
                                            <FontAwesomeIcon icon={ faPaperPlane } /> Email
                                        </button>
                                        <button className="bg-red-300 rounded px-1 border mx-1 hover:bg-red-500 hover:text-white" onClick={() => {
                                            this.props.remove(employee.email)
                                        }}>
                                            <FontAwesomeIcon icon={ faTrashAlt } /> Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeList;
