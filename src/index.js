//packages
const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const compression = require("compression")
const helmet = require("helmet")
//middlewares
const app = express();
app.use(morgan("dev"))
app.use(compression())
app.use(express.json())
app.use(helmet())
app.use("/views", express.static(__dirname + "/views"));
//**routes**//
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})
//authRoutes
const authRoutes = require("./routes/authRoutes.js");
app.use("/auth", authRoutes);
//database connection and server startup
mongoose.connect(process.env['MONGO']).then(res => {
  app.listen("3000", () => {
    console.log("database connected")
    console.log("server:3000")
  })
})
