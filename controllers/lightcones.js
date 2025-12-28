const router = require('express').Router()
const Lightcone = require('../models/lightcone')

router.get('/', async (req, res) => {
  try {
    let result = await Lightcone.find({}).select(['id', 'name', 'path', 'rarity', 'effect', 'superImpositions'])

    res.status(200).send(result)
  } catch (e) {
    console.error("An error occurred while trying to get the lightcones information from database", e)
    res.status(400).send({ error: "An error occurred while trying to get the lightcones information." })
  }
})

router.get('/:id', async (req, res) => {
  try {
    let result = await Lightcone.findById(req.params.id)

    if (!result) res.status(404).send({ error: "A lightcone by this id could not be found." })
    else res.status(200).send(result)
  } catch (e) {
    console.error("An error occurred while trying to get the lightcone information from database", e)
    res.status(400).send({ error: "An error occurred while trying to get the lightcone information." })
  }
})

module.exports = router