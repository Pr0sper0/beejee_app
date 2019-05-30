import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const TaskListItem = (props) => {
    const {  id, username, email, text, status, modify } = props
    console.log(modify)
    return (
    <div>
    <h3> {username}&nbsp;
    {modify && 
    <Link to={`/edit/${id}`} style={{color: 'grey'}}>
        modify Task
    </Link>}</h3>
        <p>Email: {email}</p>
        <p>Desription: {text}</p>
        <p>Status: {status}</p>
    </div>
    )}

const mapStateToProps = (state) => {
    console.log('list item')
    console.log(state.tasks.message.tasks)
    return ({
        tasks: state.tasks.message.tasks
        
    });
}

export default connect(mapStateToProps)(TaskListItem);
