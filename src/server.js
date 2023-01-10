//Exports
const express = require('express')
const app = express()
const { PORT } = require('./config')
const cors = require('cors')

//Use
app.use(cors())
app.use(express.json())
app.use(require('./modules'))

//Listen
app.listen(PORT, console.log(`Server running at port: ${PORT}`))