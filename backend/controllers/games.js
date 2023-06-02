const express = require("express");
const gamesRouter = express.Router();
const game_requests = require('../db_requests/game_requests')

gamesRouter.get("/upsets", async(req,res) => {
    const games = await game_requests.getUpsets();
    res.json(games)
})

//GET request to get a specific game
gamesRouter.get("/:gameId", async (req, res) => {
    const gameId = req.params.gameId;
    const game = await game_requests.getGame(gameId);
    console.log(game)
    res.json(game)
});

// POST request to add a new game
gamesRouter.get("/", async(req,res) => {
    const { ladder_id,player_1_id, player_2_id, result} = req.query
    const games = await game_requests.getGamesByParams(ladder_id,player_1_id,player_2_id,result)
    res.json(games)
})
gamesRouter.post("/", async (req, res) => {
    const { ladder_id,player_1_id, player_2_id, result} = req.body;
    const val = await game_requests.addGame(ladder_id,player_1_id,player_2_id,result)
    res.json(val);
}); 

module.exports = gamesRouter;
