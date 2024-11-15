const express = require("express")
const router = express.Router();
const Person = require('./../models/Person')

// this is the person data ================
router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newPerson = new Person(data);
    const response = await newPerson.save()
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
    const data = await Person.find()
    console.log('data fetch');
    res.status(200).json(data)
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ error: 'internal server error' })
  }
})

router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType })
      console.log('response fetch');
      res.status(200).json(response)
    } else {
      res.status(404).json({ error: 'invalid work type' })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server Error' })

  }
})

router.put('/:id', async (req, res) => {
  try {
    const personid = req.params.id;
    const updatePersonData = req.body;
    const response = await Person.findByIdAndUpdate(personid, updatePersonData, {
      new: true,
      runValidators: true,
    })
    if (!response) {
      return res.status(404).json({ error: 'person not found' })
    }

    console.log('updated data');
    res.status(200).json(response);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'internal server error' })

  }
})

router.delete('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId)

    if (!response) {
      return res.status(404).json({ error: 'Person not found' })
    }

    console.log('data delete');
    res.status(200).json({ message: 'person data succesfully' })

  }
  catch (error) {
    console.log(error);
    res.status(500).json({ error: 'internal server error' })
  }
})
module.exports = router