const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("listening!");
});

app.get('/greeting', (req, res) => {
    res.send('Hello, stranger.');
});

app.get('/greeting/:name', (req, res) => {
    res.send("Hello there, " + req.params.name);
});