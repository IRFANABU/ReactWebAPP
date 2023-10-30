const express = require ('express')
const app = express();
// const PORT = process.env.PORT || 8081;
const PORT = 8081;
app.listen(PORT,console.log(`server is running on this port ${PORT}`));


app.get('/',(req,res)=>{
    res.send("Hello world");
});