import axios from 'axios';

const ROOT_URL = 'https://uxcandy.com/~shapoval/test-task-backend';

export default axios.create({
    baseURL: `${ROOT_URL}`
});
