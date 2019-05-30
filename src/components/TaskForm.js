import React from 'react';


export default class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.task ? props.task.username : '',
            text:  props.task ? props.task.text : '',
            email: props.task ? props.task.email : '' ,
            status: props.task ? Number(props.task.status) : 0,
            error: ''
        };
    }

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }))
    }
//|| email.match(/^\A[^@]+@([^@\.]+\.)+[^@\.]+\z/)
    onEmailChange = (e) => {
        const email = e.target.value;
        if (email) 
        {
        this.setState(() =>  ({ email }))
        } 
    }

    onTextChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({
            text: notes
        }))
    }

    handleCheck = (e) => {
        const check = e.target.checked
        
        this.setState (() => ({
            status: Number(check)
        }))
        console.log(Number(check))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.username || !this.state.email || !this.state.text) {
            // Set error state
            this.setState(() => ({
                error: 'Fields username, email and description are necessary'
            }))
        } if (!this.state.email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)) {
            this.setState(() => ({
                error: 'incorrect email format',
                email: ''
            }))
        }        
        else {
            console.log(this.state.email)
            this.setState(() => ({
                error: ''
            }));
            this.props.onSubmit({
                username: this.state.username,
                email: this.state.email,
                text: this.state.text,
                status: this.state.status
            });            
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                    <form onSubmit={this.onSubmit}>
                        <input disabled={this.props.modify}
                            type="text"
                            placeholder="username"
                            autoFocus
                            value={this.state.username}
                            onChange={this.onUsernameChange}
                        /><br /><br />
                        <input 
                            type="text" disabled={this.props.modify}
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        /><br /><br />
                        <textarea 
                            placeholder="Input description"
                            value={this.state.text}
                            onChange={this.onTextChange}
                        /> 
                        <h2>Task status&nbsp;
                        <input type='checkbox' value={this.state.status} checked={this.state.status} onChange={this.handleCheck} /></h2>
                        {this.state.status ? <p>Completed</p> : <p>In process</p>}
                        
                         <br />
                         
                        <button>Add task</button>
                    </form>
            </div>
        )
    }
}
