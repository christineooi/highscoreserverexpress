const express = require('express');
const app = express();
const jsonBody = require("body/json");
var scores = [{name: "Edwin", score: 50}, {name: "David", score: 79}];
 
const port = 3000;

app.get('/scores', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/javascript');
    res.send(JSON.stringify(scores));
});

app.post('/scores', (req, res) => {
    res.statusCode = 201;
    jsonBody(req, res, (err, body) => {    
        scores.push(body);
        // sort by score
        scores.sort(function(player2, player1) {
            // Descending
            return player1.score - player2.score;
        });
        // Keep top 3 scores
        scores.splice(3);  
    })
    res.send("New score added");
    
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});