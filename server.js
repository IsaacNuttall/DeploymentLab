const express = require('express')
const app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'e12ff913f8904b3f9812100e9b8e03b8',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const {turnGreen} = require('./controller.js')

app.get('/api/moneyscam', turnGreen)

app.use(express.static(`${__dirname}/public`))
app.listen(4000, () => console.log(`server running on 4000`))


