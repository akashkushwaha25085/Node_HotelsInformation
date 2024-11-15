const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL,{
   useNewUrlParser:true,
   useUnifiedTopology:true
})

const db = mongoose.connection;
 
db.on('connected',()=>{
   console.log('connected to MongoDb server');
})
db.on('error',(err)=>{
   console.error('mongo connection error',err)
})
db.on('disconnect',()=>{
   console.log('mongodb  disconnect');
})
module.exports = db;










