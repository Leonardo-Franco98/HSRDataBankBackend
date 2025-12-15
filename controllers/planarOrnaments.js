const router = require('express').Router()
const PlanarOrnament = require('../models/planarOrnament')

router.get('/', async (req, res) => {
  try {
    let result = await PlanarOrnament.find({}).select(['id', 'name', 'effect'])

    res.status(200).send(result)
  } catch (e) {
    console.error("An error occurred while trying to get the planar ornament sets information from database", e)
    res.status(400).send({ error: "An error occurred while trying to get the planar ornament sets information." })
  }
})

router.get('/:id', async (req, res) => {
  try {
    let result = await PlanarOrnament.findById(req.params.id)

    if (!result) res.status(404).send({ error: "A planar ornament set by this id could not be found." })
    else res.status(200).send(result)
  } catch (e) {
    console.error("An error occurred while trying to get the planar ornament set information from database", e)
    res.status(400).send({ error: "An error occurred while trying to get the planar ornament set information." })
  }
})

module.exports = router