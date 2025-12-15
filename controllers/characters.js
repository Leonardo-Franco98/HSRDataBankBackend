const router = require('express').Router()
const Character = require('../models/character')

router.get('/', async (req, res) => {
  try {
    let result = await Character.find({}).select(['id', 'name', 'path', 'element', 'rarity', 'stats'])

    res.status(200).send(result)
  } catch (e) {
    console.error("An error occurred while trying to get the characters information from database", e)
    res.status(400).send({ error: "An error occurred while trying to get the characters information." })
  }
})

router.get('/:id', async (req, res) => {
  try {
    let result = await Character.findById(req.params.id)

    if (!result) res.status(404).send({ error: "A character by this id could not be found." })
    else res.status(200).send(result)
  } catch (e) {
    console.error("An error occurred while trying to get the character information from database", e)
    res.status(400).send({ error: "An error occurred while trying to get the character information." })
  }
})

module.exports = router