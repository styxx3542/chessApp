const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const user_requests = require("../db_requests/user_requests")
const ladder_requests = require("../db_requests/ladder_requests")
const db = require("../db")
usersRouter.post("/", async (req, res) => {
    const { username, name, password,isAdmin } = req.body;
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const roleId = isAdmin?1:2;
    const user = {
        username: username,
        name: name,
        passwordHash: passwordHash,
        createdAt:new Date(),
        roleId:roleId
    };
    db.query(`insert into users(username,name,password_hash,created_date,role_id) values (?,?,?,?,?)`,[user.username,user.name,user.passwordHash,user.createdAt,user.roleId],(err,data) => {
        if(err){
            console.error(err)
        }
        console.log(data)
    })
    res.status(201).json(user);
});

usersRouter.get("/", async (req, res) => {
    const users = await user_requests.getAllUsers();
    res.json(users)
});
usersRouter.get("/champions", async(req,res) => {
    const users = await user_requests.getChampions();
    res.json(users);
})
usersRouter.get("/feedback", async(req,res) => {
    const feedback = await user_requests.getFeedback();
    res.json(feedback)
})
usersRouter.get("/:user_id", async(req,res) => {
    const user = await user_requests.getUserById(req.params.user_id)
    const stats = await user_requests.getStats(req.params.user_id)
    const ladders = await user_requests.getLadders(req.params.user_id)
    const games = await user_requests.getRecentGames(req.params.user_id)
    res.json({user,stats,ladders,games})
})
usersRouter.get("/:user_id/progression/:ladder_id", async(req,res) => {
    const progression = await user_requests.getProgression(req.params.user_id,req.params.ladder_id)
    res.json(progression)
})
usersRouter.get("/:user_id/:ladder_id",async(req,res) => {
    const history = await user_requests.getHistory(req.params.user_id,req.params.ladder_id)
    res.json(history)
})
usersRouter.post("/:user_id/feedback", async(req,res) => {
    const {feedback} = req.body
    const response = await user_requests.postFeedback(req.params.user_id,feedback)
    res.json(response)
})
module.exports = usersRouter;
