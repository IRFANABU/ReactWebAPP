const mysql = require ('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: 'react'
})

db.connect((error,result)=>{
if (error){
    console.log("failed to connect")
}
else{
    console.log("Success db connected")
}

})

// const sql = "Create database react";
// const table = "create table signup (id INT Auto_Increment primary key,username VARCHAR (255),email VARCHAR (255),password VARCHAR(255))";
// db.query(table,(err,result)=>{
//     if(err){
//         throw err;
//     }
//     console.log("created")
// })


module.exports = db;