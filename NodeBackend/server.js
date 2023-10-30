const express = require('express')
const mysql = require('./db')
const cors = require('cors')

//
const app = express();
app.use(cors());
app.use(express.json())

// const PORT = process.env.PORT || 8081;
const PORT = 8081;
app.listen(PORT, console.log(`server is running on this port ${PORT}`));


app.get('/', (req, res) => {
    res.send("Hello world");
});

app.post('/signup', (req, res) => {
    var Insertquery = "Insert into signup Values(?)"
    const datas = [

        req.body.name,
        req.body.email,
        req.body.password
    ]
    var sqls = "Insert INTO signup (`username`,`email`,`password`) Values(?)";
    mysql.query(sqls, [datas], function (err, result) {
        if (err) {
            throw err;
        }
        else (

            (res.json(datas))
        )
    })

})
app.post('/login', (req, res) => {
    
    const datas = [
        req.body.email,
        req.body.password
    ]
    var sqls = "Select * from signup WHERE email =? AND password = ?";
    mysql.query(sqls, [req.body.email,req.body.password], function (err, result) {
        if (err) {
            throw err;
        }
        if(result.length > 0){
            return res.json("success")
        }
        else{
            return res.json("failed")
        }
    })

})