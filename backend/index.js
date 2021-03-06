const express        = require('express')
const mongoose       = require('mongoose')
const morgan         = require('morgan')

const EmployeeRoute = require('./routes/employee')

mongoose.connect('mongodb://localhost:27017/reactdbs', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', err => console.log(err))
db.once('open', () => console.log("Database connected"))

const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
app.use('/api/employee', EmployeeRoute)