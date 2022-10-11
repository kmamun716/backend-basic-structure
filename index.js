const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 4000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g1juc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use('/api/v1/user', require('./routes/userRoutes'));


app.get('/', (req, res)=>{
    res.send('server is running successfully');
});

app.listen(port,()=>{
    console.log(`server is running port ${port}`)
    mongoose.connect(uri,(err, db)=>{
        if(err) throw err;
        console.log('database connected')
    })
})