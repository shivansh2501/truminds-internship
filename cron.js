const cron = require('node-cron');
const express = require('express');
const fs = require('fs');
require('./index.js')

app = express();

cron.schedule("*/10 * * * *", function() {
    
    let data = `${new Date().toUTCString()} : Server is working\n`;

    fs.appendFile("logs.txt", data, (err) => {
        if(err) throw err;

        console.log('Status logged!');
    });

});

app.get('/', function(req,res) {
    res.send('Hello World');
})

app.listen(3000, () => {
    console.log("App will run on server 3000!");
});