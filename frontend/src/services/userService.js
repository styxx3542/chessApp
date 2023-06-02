import axios from 'axios'
const baseUrl = '/api/users'

const getChampions = async () => {
    const response = await axios.get(baseUrl + `/champions`)
    return response.data
}
const getUser = async(id) => {
    const response = await axios.get(baseUrl + `/${id}`)
    return response.data
}
const getProgression = async(user_id,ladder_id) => {
    const response = await axios.get(baseUrl + `/${user_id}/progression/${ladder_id}`)
    return response.data
}
const postFeedback = async(user_id,feedback) => {
    const response = await axios.post(baseUrl + `/${user_id}/feedback`,{feedback: feedback})
    return response.data
}
const getFeedback = async() => {
    const response = await axios.get(baseUrl + '/feedback')
    return response.data
}
// eslint-disable-next-line
export default { getChampions,getUser,getProgression,postFeedback,getFeedback }