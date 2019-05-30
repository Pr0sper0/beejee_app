import React from 'react';
import getSortableTasks from '../selectors/tasks'
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/tasks'
import TaskListItem from './TaskListItem';
import { bindActionCreators } from 'redux';
import _ from 'lodash';


const pagStyle = {
    position: 'relative',
    width: '190px',
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none',
    justifyContent: 'space-between',
    paddingTop: '20px',
    margin: '10px',
    cursor: 'pointer',
    color: 'green'
}

class TaskList extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            tasksPerPage: 3
        }
        
    }

    componentDidMount() {
        console.log('Component did mount')
        this.props.fetchTasks(this.state.currentPage);
    }

    renderTasks = (tasks) => {
       // console.log(tasks)
       return _.map(tasks, task => {
           return (
               <li className="list-group-item" key={task.id}>
                   <TaskListItem key={task.id} {...task} modify={this.props.isLoginSuccess}/>
               </li>
           )
       })
        
    }

    handleClick = (e) => {
        const page = e.target.value
        this.props.fetchTasks(page)
        this.setState(() => ({
          currentPage: Number(page)
        }));
      }

    renderPageNumbers = (pageNumbers) => {
        
        return _.map(pageNumbers, number => {
           
        return (
          <li
            key={number}
            id={number}
            value={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );})
    }

    render () {
        // Pagination logic
        const { tasksPerPage } = this.state
        const pageNumbers = [];
        //const lastTaskP = currentPage * tasksPerPage;
        //const firstTaskP = lastTaskP - tasksPerPage
        const currentTasks = this.props.current_tasks;
        console.log(this.props.total_task_count)
        for (let i = 1; i <= Math.ceil(this.props.total_task_count / tasksPerPage); i++) {
          pageNumbers.push(i);
        }



        console.log(pageNumbers)
        return (
            <div>
            <h1>Overall Tasks List</h1>
                <ul className="list-group">
                    {this.renderTasks(this.props.current_tasks)}
                </ul>
                <ul id="pagination" style={pagStyle}>
                    {this.renderPageNumbers(pageNumbers)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state={}) => {
    const { tasks, total_task_count } = state.tasks.message
    console.log(state)
    return {
        total_task_count: total_task_count,
        current_tasks: getSortableTasks(tasks, state.filters),
        isLoginSuccess: state.login.isLoginSuccess
        
    }
}

const mapDispatchToProps = (dispatch) =>  ({
        fetchTasks: (page) => dispatch(fetchTasks(page))
})


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
