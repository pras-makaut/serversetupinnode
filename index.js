const express = require('express');
const app = express(); // create a express server object
const PORT = 3000

app.get('/home', (req, res) => {
  res.send('Hello there! welcome to get');
})
app.post('/home', (req, res) => {
    res.send('Hello there! welcome to post')
  })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})