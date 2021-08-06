const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// const connection = require("./database/connection");

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
//connect database
// new Promise((resolve, reject) => {
//   connection.authenticate().then((err) => {
//     if (err) {
//       console.log('error is ' + err);
//       reject(err);
//     } else resolve("DB connected");
//   });
// });

module.exports = app;
