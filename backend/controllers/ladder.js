const express = require("express");
const router = express.Router();
const ladder_requests = require("../db_requests/ladder_requests");

//Make a new ladder
router.post("/", async (req, res) => {
    try {
        const result = await ladder_requests.createLadder(
            req.body.ladder_name
        );
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
});

router.get("/leaderboard", async(req,res) => {
    const result = await ladder_requests.getLeaderboard()
    res.json(result);
})
router.delete("/:ladder_id", async (req, res) => {
    try {
        const result = await ladder_requests.deleteLadder(req.params.ladder_id);
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
});

router.get('/:ladder_id/games',async (req,res) => {
    const games = await ladder_requests.getGamesInLadder(req.params.ladder_id);
    res.json(games)
})
router.get('/:ladder_id', async (req, res) => {
  console.log(req.params)
    try {
      const allPlayers = await ladder_requests.getUsersInLadder(req.params.ladder_id)
      const name = await ladder_requests.getLadderName(req.params.ladder_id)
      const result = {
        players: allPlayers,
        name: name[0].ladder_name
      }
      res.json(result);
    } catch (err) {
      console.error(err.message);
    }
  });
  // Add a new player to the ladder
  router.post('/:ladder_id', async (req, res) => {
    try {
      const result = await ladder_requests.addUserToLadder(req.params.ladder_id,req.body.user_id);
      res.json(result);
    } catch (err) {
      console.error(err.message);
    }
  });
module.exports = router;