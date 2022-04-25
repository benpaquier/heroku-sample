const express = require("express")
const app = express()

const { getHomeArticles } = require("../controllers/home")

app.get('/', getHomeArticles)

module.exports = app
