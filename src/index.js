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

//initConfig
const insertRoles=require("./initConfig/insertRoles")

//root server//
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})
//authRoutes
const authRoutes = require("./routes/authRoutes.js");
app.use("/auth", authRoutes);
//categoryRoutes
const categoryRoutes = require("./routes/categoryRoutes.js");
app.use("/category", categoryRoutes);
//productRoutes
const productRoutes=require("./routes/productRoutes.js")
app.use("/product",productRoutes)
//database connection and server startup
mongoose.connect(process.env['MONGO']).then(res => {
  app.listen("3000", () => {
    console.log("database connected")
    insertRoles()
    console.log("server:3000")
  })
})
