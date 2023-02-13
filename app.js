const express = require("express")

const app = express()

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/html/login.html")
})

app.get("/home", (req,res) => {
  res.sendFile(__dirname + "/html/home.html")
})

app.listen(5100, console.log("프론트 서버 온!"))