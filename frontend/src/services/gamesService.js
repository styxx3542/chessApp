import axios from 'axios'
const baseUrl = '/api/games'

const getUpsets = async () => {
    const response = await axios.get(baseUrl + `/upsets`)
    return response.data
}

const getGames = async (params) => {
    const response = await axios.get(baseUrl,{params:params})
    return response.data
}
const postGames = async(params) => {
    const response = await axios.post(baseUrl,params)
    return response.data
}
// eslint-disable-next-line
export default { getUpsets,getGames,postGames }