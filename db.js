
const mongoose = require('mongoose');

var mongourl= 'mongodb+srv://sahithi:1234@cluster0.k7uhfox.mongodb.net/InnSync'

mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
var connection = mongoose.connection
connection.on('error', ()=>{
    console.log("MongoDb connection failed")
})

connection.on('connected', ()=>{
    console.log('Mongo db connection success')
})
module.exports = mongoose
