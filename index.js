const express = require("express")
const app = express()
const port = 5000

// on dit à notre application d'utiliser 
// handlebars en tant que view engine
const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set('view engine', 'handlebars')

// routes
const homeRoutes = require('./routes/home')
app.use('/home', homeRoutes)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

