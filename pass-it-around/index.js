const express = require('express');
const app = express();
const port = 3001;

app.listen(port, () => {
    console.log("listening!")
});

app.get('/', (req, res) => {
    res.send('99 Bottles of beer on the wall, <a href="http://localhost:3001/newpage/98">take one down, pass it around.</a>');
});

app.get('/newpage/:number_of_bottles',(req, res) => {
    if (req.params.number_of_bottles > 0){
    let numberOfBottles = req.params.number_of_bottles - 1;
    res.send(`${req.params.number_of_bottles} Bottles of beer on the wall, <a href="http://localhost:3001/newpage/${numberOfBottles}"> take one down, pass it around.</a>`);
    } else {
    res.send('No more to take down! <a href="http://localhost:3001/">Start over !? </a>')
    }
});