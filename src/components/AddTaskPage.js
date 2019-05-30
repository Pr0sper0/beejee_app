import React from 'react'
import TaskForm from './TaskForm'
import { connect } from 'react-redux'
import { addTask } from '../actions/tasks';

const AddTaskPage = (props) => (
    <div>
        <h1>Add Task</h1>
        <TaskForm 
            onSubmit={(task) => {
                console.log(task)
                props.dispatch(addTask(task));
                props.history.push('/');
            }}
        />
    </div>
)



export default connect()(AddTaskPage);