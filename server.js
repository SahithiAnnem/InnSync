const express= require("express");

const app=express();
const dbConfig = require('./db')

const roomsRoute = require('.\routes\roomsRoute.js')

app.use('/api/rooms', roomsRoute)

const port = process.env.port || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));


