const express = require("express")
const cors = require("cors")

const app = express()

let corsOptions = {
  origin: 'http://localhost:5000',
  credentials: true
}

app.use(cors(corsOptions))

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/html/login.html")
})

app.get("/home", (req,res) => {
  res.sendFile(__dirname + "/html/home.html")
})

app.get("/signup", (req,res) => {
  res.sendFile(__dirname + "/html/signup.html")
})

app.get("/profile", (req,res) => {
  res.sendFile(__dirname + "/html/profile.html")
})

app.get("/search", (req,res) => {
  res.sendFile(__dirname + "/html/search.html")
})

app.listen(5100, console.log("프론트 서버 온!"))