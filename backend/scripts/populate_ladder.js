import db from "../db.js"
const addGame = async(ladder_id,player1_id,player2_id,result) => {
    let query = `insert into games(time_of_game,result,ladder_id,player_1_id,player_2_id) values(current_timestamp,${result},${ladder_id},${player1_id},${player2_id})`
    const res = await db.query(query).catch(err => {throw err})
    return JSON.parse(JSON.stringify(res))
}
for(let ladder = 1;ladder <= 9;ladder++)
{
    for(let i = 1;i<= 20;i++)
{
    let player1 = 1
    let player2 = ladder + 1 + Math.floor(Math.random() *10)
    let ran = Math.random();
    let res = 0
    if(ran < 0.2)
    {
        res = 0.5
    }
    else if(ran < 0.55)
    {
        res = 1;
    }
    if(player1 == player2)continue;
    await addGame(ladder,player1,player2,res);
    await new Promise(resolve => setTimeout(resolve,100));
}
}
