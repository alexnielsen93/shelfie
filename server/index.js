const express = require('express')
const app = express()
const controller = require('./controller.js')
const massive = require('massive')
require ('dotenv').config()

const {CONNECTION_STRING} = process.env
const PORT = 4040

massive(CONNECTION_STRING).then(dbInstance =>{
  app.set("db",dbInstance)
}).catch(err=>{console.log`error1 ${err}`})

app.use(express.json())

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})
