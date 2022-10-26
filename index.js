const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors())


const courses = require('./courses.json')
const categories = require('./categories.json')

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c => c.id === id);
    res.send(selectedCourse);
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const selectedCategory = categories.find(category => category.category_id === id);
    res.send(selectedCategory);
})

app.listen(port, () => {
    console.log('Server running on port:', port)
})