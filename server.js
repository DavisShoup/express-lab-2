const express = require('express');
const app = express();

const array = 
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

const randomString = array[Math.floor(Math.random() * array.length)];

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
  });

app.get("/magic/:phrase", (req, res) => {
    res.send(`<h1>Your question: ${req.params.phrase}<br> the outcome: ${randomString}</h1>`);
})

