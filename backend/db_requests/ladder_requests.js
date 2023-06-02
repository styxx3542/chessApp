const db = require('../db')
const getUsersInLadder = async(ladder_id) => {
    console.log(ladder_id)
    let query = `SELECT id,name,elo FROM ladder_user inner join users on users.id = ladder_user.user_id where ladder_id = ${ladder_id} ORDER BY elo DESC`;
    const users = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(users))
}
const getLeaderboard = async() => {
    let query = 'select ladder_name,name,elo,users.id as player_id from ladder,users,ladder_user where ladder_user.ladder_id = ladder.ladder_id and ladder_user.user_id = users.id and users.id = get_max_elo(ladder.ladder_id)'
    const leaderboard = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(leaderboard))
}


const getLadderName = async(ladder_id) => {
    let query = `select ladder_name from ladder where ladder_id = ${ladder_id}`
    const name = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(name))
}
const addUserToLadder = async(ladder_id,user_id) => {
    let query = `insert into ladder_user(ladder_id,user_id,elo) values(${ladder_id},${user_id},1200)`
    const res = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(res))
}

const createLadder = async(ladder_name) => {
    let query = `insert into ladder(ladder_name,created_date) values('${ladder_name}',current_date)`
    const res = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(res))
}

const deleteLadder = async(ladder_id) => {
    let query = `delete from ladder where ladder_id = ${ladder_id}`;
    const res = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(res))
}

const deleteUserFromLadder = async(ladder_id,user_id) => {
    let query = `delete from ladder_user where ladder_id = ${ladder_id} and user_id = ${user_id}`
    const res = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(res))
}

const getPlayerElo = async(player_id,ladder_id) => {
    let query = `select elo from ladder_user where ladder_id = ${ladder_id} and user_id = ${player_id}`
    const [elo] = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(elo))
}

const updatePlayerElo = async(player_id,ladder_id,new_elo) => {
    let query = `update ladder_user set elo = ${new_elo} where ladder_id = ${ladder_id} and user_id = ${player_id}`
    const res = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(res))
}

const getGamesInLadder = async(ladder_id) => {
    let query = `select * from games where ladder_id = ${ladder_id}`
    const games = await db.query(query).catch(err => {throw err})
    return  JSON.parse(JSON.stringify(games))
}

const getLadderByUser = async(user_id) => {
    let query = `select ladder_id,ladder_name,elo from ladder_user natural join ladder where user_id = ${user_id}`
    const ladders = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(ladders))
}

module.exports =   {
    getUsersInLadder,
    addUserToLadder,
    createLadder,
    deleteLadder,
    deleteUserFromLadder,
    getPlayerElo,
    updatePlayerElo,
    getLadderName,
    getGamesInLadder,
    getLadderByUser,
    getLeaderboard
}

