const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(`${__dirname}/public`))


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'e12ff913f8904b3f9812100e9b8e03b8',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const { getCompliment, getFortune, addGoal, deleteGoal, updateGoal, enhanceGoal } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post("/api/goal", addGoal);

app.delete('/api/goal/:id', deleteGoal);

app.put('/api/goal/:id', updateGoal);

// app.put('/api/goal/:id', enhanceGoal)

app.listen(4000, () => console.log(`server running on 4000`))


