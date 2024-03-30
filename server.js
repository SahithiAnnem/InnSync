const express = require("express");
const app = express();
const dbConfig = require('./db');

// Correct the path to roomsRoute by using forward slashes
const roomsRoute = require('./routes/roomsRoute.js');


app.use(express.json());
app.use('/api/rooms', roomsRoute);

const port = process.env.PORT || 5000; // Use PORT instead of port
app.listen(port, () => console.log(`Server running on port ${port}`));
