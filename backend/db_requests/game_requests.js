const db = require('../db')

const addGame = async(ladder_id,player1_id,player2_id,result) => {
    let query = `insert into games(time_of_game,result,ladder_id,player_1_id,player_2_id) values(current_timestamp,${result},${ladder_id},${player1_id},${player2_id})`
    const res = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(res))
}

const getGame = async(game_id) => {
    let query = `select * from games where game_id = ${game_id}`
    const game = await db.query(query).catch(err => {throw err})
    return  JSON.parse(JSON.stringify(game))
}
const getUpsets = async() => {
    let query = 'select (select name from users where id = winner_id) as player_1,winner_id,loser_id,(select name from users where id = loser_id) as player_2,time_of_game,elo_difference from upsets where TIMESTAMPDIFF(DAY,upsets.time_of_game,current_timestamp)<7 order by elo_difference desc limit 10'
    const upsets = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(upsets))
}
const getGamesByParams = async(ladder_id,player_1_id,player_2_id,result) =>
{
    let query = `select player_1_id,player_2_id,result,(select name from users where id = player_1_id) as player_1,(select name from users where id = player_2_id) as player_2,(select ladder_name from ladder where ladder.ladder_id = games.ladder_id) as ladder from games where 1=1`
    let str1 = ladder_id ? ` and ladder_id = ${ladder_id}`: ''
    let str2 = player_1_id?` and player_1_id = ${player_1_id}`:''
    let str3 = player_2_id?` and player_2_id = ${player_2_id}`:''
    let str4 = result?` and result = ${result}`:''
    query = query + str1 + str2 + str3 + str4 + ' limit 15';
    console.log(query)
    const games = await db.query(query).catch(err => {throw err})
    console.log(games)
    return JSON.parse(JSON.stringify(games))
}

module.exports = 
{
    addGame,
    getGame,
    getGamesByParams,
    getUpsets
}

