'use strict'

const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 80;

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/php', (req, res) => {
    res.sendFile(path.join(__dirname+'/covid.html'))
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
})

module.exports = app