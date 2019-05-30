// Tasks reducer


const tasksReducerDefaultState = {
    "status": "ok",
    "message": {
        "tasks": [],
        "total_task_count": "0"
    }
}

export default (state = tasksReducerDefaultState, action) => {
    switch (action.type) {
        case 'FETCH_TASKS':
            var res = action.payload.data;
            console.log(res);
            return res;
        case 'ADD_TASK':
            var dataToPost = {data: [action.task]}
            console.log([...state, action.task])
            return [...state, action.task]
        case 'REMOVE_TASK':
            return state.filter(task => {return (
                task.id !== action.task.id
            )})
        case 'EDIT_TASK':
            let source = state.message.tasks
            console.log('edit task')
            return state
            
        default:
                return state
        }
}
