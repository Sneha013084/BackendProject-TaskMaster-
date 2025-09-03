const express = require('express');

const connectDB= require('./config/Connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

//middleware

app.use (express.json());

//routes

app. get ('/', (req, res)=>{
    res.send('TaskMaster API is running');
});

app.listen(PORT , () => console.log(`Server running on port ${PORT}`));

 