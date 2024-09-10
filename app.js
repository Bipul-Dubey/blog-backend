const express = require("express");
const AppError = require("./utils/appError");
const { globalErrorMiddleware } = require("./controllers/errorControllers");
const app = express();
// ====== import router ======
const router = require("./routes/userRoutes");

// === middlewares ===
app.use(express.json());

// === serving static files ===
// app.use(express.static(`${__dirname}/public`));

// === all routes will define here
app.use("/api/v1/users", router);

// ==== return when no route handler match all above ====
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// ===== error handling: we handling try and catch in each function =====
app.use(globalErrorMiddleware);

module.exports = app;
