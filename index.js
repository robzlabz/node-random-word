const express = require('express');
const app = express();

app.get('/word', (req, res) => {
    const words = require('./words.json');
    var randomInt = Math.floor(Math.random() * words.length);
    res.json({
        word: words[randomInt]
    });
});

app.get('/', (req, res) => {
    res.send('/word');
});

app.listen(process.env.PORT || 3000, () => console.log("Server Ready"));