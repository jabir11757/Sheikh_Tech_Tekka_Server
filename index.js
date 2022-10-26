const express = require('express');
const app = express();
const port = 5000;


const courses = require('./courses.json')

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log('Server running on port:', port)
})