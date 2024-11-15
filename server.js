const express = require('express')
const app = express()
const port = 3000
const db = require('./db')

const bodyParser = require('body-parser')   // req.body
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Welcome to my hotel ...how i can i help you !')
})


// import the router files  =================
const personRoutes = require('./routes/personRoutes') 
app.use('/person',personRoutes);

// import the router files ==================
const menuItemRoutes  = require('./routes/menuItemRoutes')
app.use('/menu',menuItemRoutes) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






