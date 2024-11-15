const mongoose = require('mongoose')

 const menuItemSchema = new mongoose.Schema({
   name:{
      type:String,
      required:true,
   },
   price:{
      type:String,
      required:true,
   },
   taste:{
      type:String,
      enum:['sweet','sour','spicy'],
      required:true,
   },
   is_drink:{
    type:Boolean,
    default:''
   },
   ingradients:{
    type: [String],
    default:[],
   },
   num_sales:{
      type:Number,
      default:0,
   }

 }) 

const Menu = mongoose.model('Menu',menuItemSchema)

module.exports = Menu;