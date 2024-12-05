const express = require('express');
const router = express.Router();

// In memory database
let tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: true },
];

router.get('/', (req, res) => {
    res.json(tasks);
});

router.post('/', (req, res) => {
    console.log("REQ body >>>", req.body)

    const taskId = Date.now()
    const body = req.body

    if (!body.title) {
        return res.status(400).send('Invalid request body.');
    }

    tasks.push({
        id: taskId,
        title: body.title,
        completed: body.completed || false,
    })

    res.json(taskId);
});

router.put('/:id', (req, res) => {
    console.log("REQ body >>>", req.body)

    const taskId = req.params.id
    const body = req.body
    let updated = false

    if (!body.title) {
        return res.status(400).send('Invalid request body.');
    }

    tasks.forEach((task) => {
        if (task.id == taskId) {
            task.title = body.title
            task.completed = body.completed || false
            updated = true
        }
    });

    res.json(updated ? taskId : null);
});

router.delete('/:id', (req, res) => {
    const taskId = req.params.id

    tasks = tasks.filter((task) => task.id != taskId);

    res.json(taskId);
});

module.exports = router;
