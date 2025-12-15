const router = require('express').Router()
const Relic = require('../models/relic')

router.get('/', async (req, res) => {
  try {
    let result = await Relic.find({}).select(['id', 'name', 'effect2', 'effect4'])

    res.status(200).send(result)
  } catch (e) {
    console.error("An error occurred while trying to get the relic sets information from database", e)
    res.status(400).send({ error: "An error occurred while trying to get the relic sets information." })
  }
})

router.get('/:id', async (req, res) => {
  try {
    let result = await Relic.findById(req.params.id)

    if (!result) res.status(404).send({ error: "A relic set by this id could not be found." })
    else res.status(200).send(result)
  } catch (e) {
    console.error("An error occurred while trying to get the relic set information from database", e)
    res.status(400).send({ error: "An error occurred while trying to get the relic set information." })
  }
})

module.exports = router