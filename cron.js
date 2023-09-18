const cron = require('node-cron');
const express = require('express');
const fs = require('fs');
const sql = require('mysql');

const con = sql.createConnection( {
    host: "127.0.0.1",
    user: "postgres",
    password: 'postgres'
});

app = express();

con.connect(err => {
    if (err) throw err;
    console.log("Connected!");
})

cron.schedule("*/10 * * * *", function() {
    
    let data = `${new Date().toUTCString()} : Server is working\n`;

    fs.appendFile("logs.txt", data, (err) => {
        if(err) throw err;

        console.log('Status logged!');
    });

});

app.listen(3000);