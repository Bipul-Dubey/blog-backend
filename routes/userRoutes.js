const express = require("express");
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  protectRoutes,
  updatePassword,
} = require("../controllers/authControllers");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.patch("/reset-password/:token", resetPassword);
router.patch("/reset-my-password", protectRoutes, updatePassword);
// router.patch("/current-user/:id", protectRoutes, updateCurrentUser);

module.exports = router;
