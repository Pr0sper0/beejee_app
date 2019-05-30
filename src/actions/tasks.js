import axios from 'axios';
import uuid from 'uuid';
import FormData from 'form-data';
import jsonPlaceholder from '../apis/jsonPlaceholder'
import '@babel/polyfill'
import md5 from 'react-native-md5';

const API_KEY='?developer=Valerii'



// FETCH TASKS
/*
export const fetchTasks = (currentPage) => {
        return {
        type: 'FETCH_TASKS',
        payload: jsonPlaceholder.get(`/${API_KEY}&page=${currentPage}`)
        }
}
*/

export const fetchTasks = (currentPage) => async dispatch => {
    const page = '&page=4'
    const response = await jsonPlaceholder.get(`/${API_KEY}&page=${currentPage}`);
    const status = await response.status
    if (status === 200){
        dispatch({type: 'FETCH_TASKS', payload: response})
    }
}

export const addTask = ({ username='', email='', text='', status=0} = {}) => async (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'multipart/form-data');

    let formData = new FormData();
    formData.append('username', username)
    formData.append('email', email)
    formData.append('text', text)
    formData.append('status', status)
    
    const request = new Request(jsonPlaceholder.post(`/create${API_KEY}`, formData, myHeaders))
    const response = await fetch(request);
    const resp_status = await response.status
    if (resp_status === 201)
    dispatch({type: 'ADD_TASK', payload: response, task: {id: uuid(), username, email, text, status}})
}

export const editTask = (id, updates) => async (dispatch) => {
    var myHeaders = new Headers();
    let result=""
    myHeaders.append('Content-Type', 'multipart/form-data');
    let uritext=encodeURIComponent(updates.text)
    let uristatus=encodeURIComponent(Number(updates.status))

    var params_string = result.concat("status=").concat(uristatus).concat("&text=").concat(uritext).concat("&token=beejee")

    var hash = md5.hex_md5(params_string);

    console.log(">>>hash", hash);
    let formData = new FormData();
    
    formData.append('status', uristatus)
    formData.append('text', updates.text)
    formData.append('token', 'beejee')
    formData.append('signature', hash)
    const uri_id = id.toString();
    //https://uxcandy.com/~shapoval/test-task-backend/edit/12759?developer=Valerii
    const request = new Request(jsonPlaceholder.post(`/edit/${uri_id}${API_KEY}`, formData, myHeaders))
    const response = await fetch(request);
    const resp_status = await response.status
    console.log("status", resp_status)
    if (resp_status === 200)
    dispatch({type: 'EDIT_TASK',  payload: response})
}

export const removeTask = ({ id } = {}) => ({
    type: 'REMOVE_TASK',
    task: { id }
})

