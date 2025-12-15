const router = require('express').Router()
const path = require('path')
const fs = require('fs')

router.get('/:folder/:image', async (req, res) => {
  let folder = req.params.folder, image = req.params.image

  if (!['characters', 'lightcones', 'planarOrnaments', 'relics'].includes(folder)) {
    res.status(400).send({ error: 'Invalid folder name.' })
    return
  }

  if (!fs.existsSync(path.join(__dirname, `../../images/${folder}`, `${image}.png`))) {
    res.status(404).send({ error: `Image ${image} does not exist for type ${folder}.` })
    return
  }

  res.sendFile(path.join(__dirname, `../../images/${folder}`, `${image}.png`))
})

module.exports = router