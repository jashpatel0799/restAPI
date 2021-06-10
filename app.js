let express = require('express');
let mongoose = require('mongoose');
let url = "mongodb://127.0.0.1:27017/student"

let app = express();

mongoose.connect(url, {userNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) console.log(err);
})
// let con = mongoose.connection

// con.on('open', () => {
//     console.log("Connected...")
// })

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

let studentRouter = require('./routers/student')
app.use('/student', studentRouter)

app.listen(7000, () => {
    console.log("Server Started...")
})