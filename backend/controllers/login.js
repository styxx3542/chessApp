const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const db = require('../db')
require('dotenv').config();
const db_calls = require('../db_requests/user_requests')
loginRouter.post("/", async (req, res) => {
    const { username, password } = req.body;
    const user = await db_calls.getUserByUsername(username)
    console.log(user)
    const passwordCorrect =
        user === null
            ? false
            : await bcrypt.compare(password, user.password_hash);

    if (!(user && passwordCorrect)) {
        return res.status(401).json({
            error: "invalid username or password",
        });
    }
    const roles = await db_calls.getRoles(user.role_id)
    console.log(roles)
    const userForToken = {
        username: user.username,
        id: user.id,
        name: user.name,
        roles:roles,
    };
    const token = jwt.sign(userForToken, process.env.SECRET);

    res.status(200).send({ token, username: user.username, name: user.name,roles:roles,id: user.id });
});

module.exports = loginRouter;
