import React from 'react';
import { connect } from 'react-redux'
import { sortById, sortByUsername, sortByEmail, sortByStatus, sortAsc, sortDesc } from '../actions/filters'
import { bindActionCreators } from 'redux';

const TaskListFilter = (props) => {
    const onSortValueChange = (e) => {
        if (e.target.value === 'id') {
            props.dispatch(sortById())
        } else if (e.target.value === 'username') {
            props.dispatch(sortByUsername())
        } else if (e.target.value === 'email') {
            props.dispatch(sortByEmail())
        } else if (e.target.value === 'status') {
            props.dispatch(sortByStatus());
        }
    }
    const onSortDirectionChange = (e) => {
        if (e.target.value === 'asc') {
            props.dispatch(sortAsc())
        } else if (e.target.value === 'desc') {
            props.dispatch(sortDesc())
        }
    }
    return (
    <div>
            <select value={props.filters.sort_field} onChange={(e) => {
                onSortValueChange(e)
        }}>
            <option value="id">ID</option>
            <option value="username">Username</option>
            <option value="email">Email</option>
            <option value="status">Status</option>
        </select>
        <select value={props.filters.sort_direction} onChange={(e) => {
                onSortDirectionChange(e)
        }}>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
        </select>
    </div>
    );
}

const mapStateToProps = (state) => {
    return ({
        filters: state.filters
    })
}



export default connect(mapStateToProps)(TaskListFilter);