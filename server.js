const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000

app.use(express.json())

app.use('/api/v1', require('./routes/courseRoutes'))
app.use('/api/v1', require('./routes/typologyRoutes'))
app.use('/api/v1', require('./routes/universityRoutes'))

connectToDB_string = "mongodb+srv://admin:adminpass@cluster0.hm0tetn.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(connectToDB_string, { useNewUrlParser: true, useUnifiedTopology: true })
.then(app.listen(port, () => console.log(`Connected to database and listening on localhost:${port}!`)))
.catch(err => console.error('Error when connecting.', err))