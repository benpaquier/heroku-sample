require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send("My app is deployed on Heroku")
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
