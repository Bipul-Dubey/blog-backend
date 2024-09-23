const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// ==== DB connection ====
const DB = `${process.env.MONGODB_URI.replace(
  "<db_password>",
  process.env.DB_PASSWORD
)}/${process.env.DATABASE}`;
mongoose
  .connect(DB, {})
  .then((con) => {
    console.log("DB connection success....");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

// ==== app ====
const app = require("./app");

// ======== start server ======
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log("App running on port: ", port);
});

// execute for un handled promises
process.on("unhandledRejection", (err) => {
  console.log(
    "unhandledRejection! 💥💥💥 Shutting down...",
    err.name,
    " : ",
    err.message
  );

  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log(
    "uncaughtException! 💥💥💥 Shutting down...",
    err.name,
    " : ",
    err.message
  );
});
