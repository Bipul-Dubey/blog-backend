const express = require("express");
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  protectRoutes,
  updatePassword,
} = require("../controllers/authControllers");
const {
  deleteCurrentUser,
  updateCurrentUser,
  getAllUser,
  getUser,
} = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/forgot-password", forgotPassword);
userRouter.patch("/reset-password/:token", resetPassword);
userRouter.patch("/reset-my-password", protectRoutes, updatePassword);
userRouter.patch("/update-current-user", protectRoutes, updateCurrentUser);
userRouter.delete("/delete-current-user", protectRoutes, deleteCurrentUser);

userRouter.route("/").get(protectRoutes, getAllUser);
userRouter.route("/:id").get(protectRoutes, getUser);

module.exports = userRouter;
