const express = require('express')
const app = express();
const PORT = process.env.PORT || 5500;
const cors = require('cors')

<<<<<<< HEAD
const pool = new Pool({
    user: 'root',
    password: 'password',
    host: 'localhost',
    port: 5433,
    database: 'fce'
})
=======
>>>>>>> 4d33f25ff2374d78dfc90a62e2d9371ea67f2ff9

app.use(express.json())
app.use(cors())


app.use('/api/trainers', require('./routes/trainers'))
app.use('/api/comments', require('./routes/comments'))


// handle unknown http reqs
app.use( (req, res, next) => {
    res.status(404).end("Not Found")
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
