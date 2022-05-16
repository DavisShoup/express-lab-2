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

app.get("/tip/:total/:tipPrecentage", (req, res) => {
    console.log(req.params)
    res.send("Your calculated tip: " + ( .01 * req.params.tipPrecentage) * req.params.total );
  })