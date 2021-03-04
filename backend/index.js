const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', function (req, res) {
  res.send('Body text from node')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})