const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello from Group 2!!')
})

app.listen(PORT)
    console.log(`Listening on port ${ PORT }`)
