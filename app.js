const express = require('express');
const tasks = require('./routes/tasks');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/tasks', tasks);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Express API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});