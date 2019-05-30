import React from 'react'
import { connect } from 'react-redux'
import TaskForm from '../components/TaskForm'
import { editTask } from '../actions/tasks'
import { removeTask } from '../actions/tasks'

const EditTaskPage = (props) => {
    console.log(props)
    return (
    <div>
        <TaskForm 
            task={props.task} modify={props.isLoginSuccess}
            onSubmit={(task) => {
                console.log('updated', task.status)
                props.dispatch(editTask(props.task.id, task));
                setTimeout(() => {props.history.push('/')}, 400)
            }}
        />
        {/*
        <button onClick = {() => {
            props.dispatch(removeTask({id: props.task.id}))
            props.history.push('/')
        }}>
            Remove
        </button>
    */}
    </div>
    );
}

const mapStateToProps = (state, props) => {
    console.log('MSTP', state)
    const { tasks } = state.tasks.message
    return {
        task: tasks.find((task) => task.id === Number(props.match.params.id)),
        isLoginSuccess: state.login.isLoginSuccess
    }
}

export default connect(mapStateToProps)(EditTaskPage);