const filtersReducerDefaultState = {
    sort_field: 'id',
    sort_direction: 'asc'
}

export default (state = filtersReducerDefaultState, action) => {
        switch (action.type) {
            case 'SORT_BY_ID':
                return {
                    ...state,
                    sort_field: 'id'
                }
            case 'SORT_BY_USERNAME':
                return {
                    ...state,
                    sort_field: 'username'
                }
            case 'SORT_BY_EMAIL':
                console.log('Sort by mail')
                    return {
                    ...state,
                    sort_field: 'email'
                }
            case 'SORT_BY_STATUS':
                    return {
                    ...state,
                    sort_field: 'status'
                }
            case 'SORT_ASC':
                return {
                    ...state,
                    sort_direction: 'asc'
                }
            case 'SORT_DESC':
                return {
                    ...state,
                    sort_direction: 'desc'
                }
            default: 
            return state
        }
}