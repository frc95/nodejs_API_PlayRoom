const express = require('express')
const routes = express.Router()

routes.get('/blueball', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM blueball ORDER BY time ASC;', (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/blueball', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('INSERT INTO blueball set ?', [req.body], (err, rows) =>{
            if(err) return res.send(err)

            res.send('resultado guardado')
        })
    })
})

routes.get('/memotest', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM memotest ORDER BY time ASC;', (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/memotest', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('INSERT INTO memotest set ?', [req.body], (err, rows) =>{
            if(err) return res.send(err)

            res.send('resultado guardado')
        })
    })
})

routes.get('/tateti', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM tateti ORDER BY score DESC;', (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/tateti', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('INSERT INTO tateti set ?', [req.body], (err, rows) =>{
            if(err) return res.send(err)

            res.send('resultado guardado')
        })
    })
})



module.exports = routes