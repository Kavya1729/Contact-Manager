const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();

const port = process.env.PORT||5000;

connectDB(); 
const app = express();

app.use(express.json());

app.use('/api/contacts',require('./routes/ContactRoutes'));  //use is middleware function
app.use('/api/users',require('./routes/userRoutes'));

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})