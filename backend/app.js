const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const loginRouter = require("./controllers/login");
const middleware = require("./utils/middleware.js");
require("express-async-errors");
const userRouter = require("./controllers/users");
const gamesRouter = require("./controllers/games");
const ladderRouter = require("./controllers/ladder")

const logger = require("./utils/logger");

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/ladders",ladderRouter);
app.use("/api/games",gamesRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
module.exports = app;
