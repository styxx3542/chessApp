const db = require('../db')
const getUserByUsername = async(username) => {
    let query = `select * from users where username = '${username}'`
    const [user] = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(user))
}
const getLadders = async(id) => {
    let query = `select ladder_name,elo from ladder_user natural join ladder where user_id = ${id}`
    const ladders = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(ladders))
}

const getStats = async(id) => {
    let query = `select count(*) as wins from games where (player_1_id = ${id} and result = 1) or (player_2_id = ${id} and result = 0);`
    const wins = await db.query(query).catch(err => {throw err})
    query = `select count(*) as losses from games where (player_1_id = ${id} and result = 0) or (player_2_id = ${id} and result = 1);`
    const losses = await db.query(query).catch(err => {throw err})
    return {
        wins: JSON.parse(JSON.stringify(wins)),
        losses: JSON.parse(JSON.stringify(losses))
    }
}
const getAllUsers = async() => {
    const users = await db.query('select * from users').catch(err => {throw err})
    return JSON.parse(JSON.stringify(users))
}

const postFeedback = async(user_id,feedback) => {
    let query = `insert into feedback values('${feedback}',${user_id},current_timestamp)`
    const response = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(response))
}
const getChampions = async() => {
    let query = 'SELECT player_id,(select name from users where users.id = player_id) as name, COUNT(*) AS wins \n\
    FROM (\n\
      SELECT player_1_id AS player_id, result\n\
      FROM games\n\
      UNION ALL\n\
      SELECT player_2_id AS player_id, 1 - result\n\
      FROM games\n\
    ) AS t\n\
    WHERE result = 1\n\
    GROUP BY player_id\n\
    ORDER BY wins DESC\n\
    LIMIT 3;'
    const champions = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(champions))
}
const getUserById = async(id) => {
    let query = `select * from users where id = ${id}`
    const [user] = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(user))
}

const getRoles = async(role_id) => {
    let query = `select * from roles where role_id = '${role_id}'`
    const [user] = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(user))
}

const getRecentGames = async(id,num=10) => {
    let query = `select (select name from users where id = player_1_id) as player_1, (select name from users where id = player_2_id) as player_2,player_1_id,player_2_id,time_of_game,(select ladder_name from ladder where ladder.ladder_id = games.ladder_id) as ladder,result from games where player_1_id = ${id} or player_2_id = ${id} order by time_of_game desc limit 10`
    const games = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(games))
}
const getProgression = async(user_id,ladder_id) => {
    let query = `select * from player_progression where player_id = ${user_id} and ladder_id = ${ladder_id}`
    const games = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(games))

}
const getHistory = async(id,ladder_id) => {
    let query = `select * from player_progression where ladder_id = ${ladder_id} and player_id = ${id} order by time_of_change;`
    const history = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(history))
}
const getFeedback = async() => {
    let query = 'select * from feedback'
    const feedback = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(feedback))
}
module.exports = {
    getUserByUsername,
    getUserById,
    getRoles,
    getAllUsers,
    getChampions,
    getLadders,
    getStats,
    getRecentGames,
    getHistory,
    getProgression,
    postFeedback,
    getFeedback
}
