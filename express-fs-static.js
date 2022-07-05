const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    const content = fs.readFileSync(path.join(__dirname + '/static/index.html'), 'utf-8');
    res.send(content);
})

app.listen(4000, () => {
    console.log('server listen on http://localhost:4000');
})


