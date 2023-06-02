import axios from 'axios'
const baseUrl = '/api/login'

const login = async (config) => {
    const response = await axios.post(baseUrl,config)
    return response.data
}

const signup = async(config) => {
    const response = await axios.post('/api/users',config)
    return response.data
}
// eslint-disable-next-line
export default { login,signup }