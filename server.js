const express = require('express');
const app = express();
const port = 9000;
const mysql = require("mysql");
const cors = require('cors');
var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'Netfilx'
})

db.connect(function (err) {
    if ( err ) throw err;
    console.log('Good Connected');
    const sql = "select * from title";
    db.query(sql, function ( err ,result ,fields) {
        if ( err ) {
            throw err;
        }
        let titleList ='';
        global.titleList=result;
    });
});

app.use(cors());
app.get("/api/title", (req, res) => {
    res.send(titleList);
})



app.listen(port, ()=> {
    console.log(`Connection at http://localhost:${port}`);
})