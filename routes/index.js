const express = require("express");
const routerV1 = express.Router();
const userRouter = require("./userRoutes");

routerV1.use("/users", userRouter);

module.exports = routerV1;
