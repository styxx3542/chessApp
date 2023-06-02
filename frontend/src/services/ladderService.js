import axios from 'axios'
const baseUrl = '/api/ladders'

const getLadder = async (id) => {
    const response = await axios.get(baseUrl + `/${id}`)
    return response.data
}
const getLeaderboard = async() => {
    const response = await axios.get(baseUrl + '/leaderboard')
    return response.data
}
const postLadder = async(ladder_name) => {
    const response = await axios.post(baseUrl,{ladder_name})
    return response.data
}

const deleteLadder = async(ladder_id) => {
    const response = await axios.delete(baseUrl + `/${ladder_id}`)
    return response.data
}

const addPlayer = async(ladder_id,player_id) => {
    const response = await axios.post(baseUrl + `/${ladder_id}`,{user_id: player_id})
    return response.data
}
// eslint-disable-next-line
export default { getLadder,getLeaderboard,postLadder,deleteLadder,addPlayer }