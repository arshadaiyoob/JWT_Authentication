const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//import routes
const authRoute = require('./routes/auth');
const sampleRoute = require('./routes/sample');
dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_Connect,
{ useNewUrlParser: true, useUnifiedTopology: true },
() => console.log('Connected to DB!'));

//Middleware
app.use(express.json());
//Route Middleware localhost/api/user/'routes'
app.use('/api/user', authRoute);
app.use('/api/sample', sampleRoute);


app.listen(3000, () => console.log('Server: Up and Running'));