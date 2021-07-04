import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUndo } from '@fortawesome/free-solid-svg-icons';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            birthdate: ''
        }
    }

    updateState = async (name, value) => {
        await this.setState({
            [name]: value
        });
        console.log(this.state[name])
    }

    render() {
        return (
            <div className="container sm:w-1/2 lg:w-full sm:mx-auto lg:mx-0">
                <h2 className="text-lg">Add Employee</h2>
                <form action="#">
                    <div className="my-1 flex">
                        <label htmlFor="name-input">Name</label>
                        <input type="text" id="name-input" name="name" placeholder="John Foe" onChange={(elem) => {
                            this.updateState('name', elem.target.value)
                        }} className="rounded border w-full ml-2"></input>
                    </div>
                    <div className="my-1">
                        <label htmlFor="phone-input">Phone </label>
                        <input type="tel" id="phone-input" name="phone" placeholder="081234567890" onChange={(elem) => {
                            this.updateState('phone', elem.target.value)
                        }} className="rounded border w-full ml-2"></input>
                    </div>
                    <div className="my-1">
                        <label htmlFor="email-input">Email </label>
                        <input type="email" id="email-input" name="email" placeholder="hi@email.com" onChange={(elem) => {
                            this.updateState('email', elem.target.value)
                        }} className="rounded border w-full ml-2"></input>
                    </div>
                    <div className="my-1">
                        <label htmlFor="birthdate-input">Birthdate </label>
                        <input type="date" id="birthday-input" name="birthdate" onChange={(elem) => {
                            this.updateState('birthdate', elem.target.value)
                        }} className="rounded border w-full ml-2"></input>
                    </div>
                    <div className="text-right my-2">
                        <button type="button" onClick={() => {
                            this.props.add({
                                name: this.state.name,
                                phone: this.state.phone,
                                email: this.state.email,
                                birthdate: this.state.birthdate
                            })
                        }} className="bg-green-300 rounded px-1 border mx-1 hover:bg-green-600 hover:text-white">
                            <FontAwesomeIcon icon={ faPlus } /> Add
                        </button>
                        <button type="reset" className="bg-red-300 rounded px-1 border mx-1 hover:bg-red-500 hover:text-white">
                            <FontAwesomeIcon icon={ faUndo } /> Reset
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EmployeeForm;
