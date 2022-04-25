const express = require("express")
const app = express()

app.get('/', (req, res) => {
  res.render('home', {
    title: "Homepage",
    isMorning: true
  })
})

module.exports = app
