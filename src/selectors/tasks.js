
const getSortableTasks = (tasks , { sort_field, sort_direction }) => {
    console.log(sort_direction)
    return tasks.filter((task) => {
        return sort_field && sort_direction
    }).sort((a, b) => {
        return sort_direction === 'desc'? sortByField(a, b, sort_field, 1) : sortByField(a, b, sort_field, -1)
   })
}

const sortByField = function(a, b, sort_field, val) {
    if (sort_field === 'username') {
        console.log(val)
        return a.username < b.username ? val : -val
    } else if (sort_field === 'id') {
        return a.id < b.id ? val : -val
    } else if (sort_field === 'email') {
        return a.email < b.email ? val : -val
    } else if (sort_field === 'status') {
        return a.status < b.status ? val : -val
    }  
}

export default getSortableTasks

