const  express = require("express")
const router =express.Router();

const Menu = require('./../models/Menu')

router.post('/', async (req, res) => { 
   try {
     const data = req.body
     const newMenu = new Menu(data)
     const response = await newMenu.save()
     console.log('data saved');
     res.status(200).json(response)
   }
   catch (error) {
     console.log(error);
     res.status(500).json({ error: 'internal server error' })
   }
 })
 
 router.get('/', async (req, res) => {
   try {
     const data = await Menu.find()
     console.log('data fetch');
     res.json(data)
 
   } catch (error) {
     console.log(error);
     res.status(500).json({ error: 'internal server error' })
 
   }
 })

 module.exports = router