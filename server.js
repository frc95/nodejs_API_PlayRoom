const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root123',
    database: 'juegos'
}

/*Cors*/
app.use(cors())

// middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('Welcome API juegos')
})
app.use('/api', routes)

// server running
app.listen(app.get('port'), () => {
    console.log('server running 9000', app.get('port'))
})