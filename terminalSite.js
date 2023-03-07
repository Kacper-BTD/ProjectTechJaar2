

const express = require('express')
const app = express()
const port = 4000

app.set ('view engine','ejs')
app.set (' views, view')

app.use(express.static('static'))
app.use(express.static(__dirname + '/public'))

app.get('/hallo', (req, res) => {
    res.send( '<h1> HELLO WORLD DIT IS EEN STRING PARAGRAPH </h1>')
})

app.get('/home/:user/', (req, res) => {
    console.log('Input from ${req.params.user}')
    res.send('<h2> hello ' + req.params.user + ' welkom bij mijn matige js website</h2>')
})

app.get('/', (req, res) => {
    res.render('home')
})


app.listen(port, () => {
    console.log('Shaking it up on port testing ' + port)
})

