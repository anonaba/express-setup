const fs = require('fs')
const tours = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json'))

exports.checkId = (req, res, next, val) => {
  console.log('Tour id ' + val)
  if (+req.params.id > tours.length) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' })
  }
  next()
}

exports.checkBody = (req, res, next) => {
  const { name, price } = req.body
  if ((!name, !price)) {
    return res.status(400).json({ status: 'fail', message: 'missing name or price' })
  }
  next()
}

exports.getAllTours = (req, res) => {
  // console.log(req.reqTime)
  res.status(200).json({ status: 'success', requestedAt: req.reqTime, results: tours.length, data: { tours } })
}

exports.getTour = (req, res) => {
  const tourFound = tours.find((t) => t.id === +req.params.id)

  // if (!tourFound) {
  //   return res.status(404).json({ status: '404 Not Found', message: 'Invalid ID' })
  // }

  res.status(200).json({ status: 'success', data: { tourFound } })
}

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1
  const newTour = { id: newId, ...req.body }

  tours.push(newTour)

  fs.writeFile('./dev-data/data/tours-simple.json', JSON.stringify(tours), (err) => {
    res.status(201).json({ status: 'success', data: { tour: newTour } })
  })
}

exports.updateTour = (req, res) => {
  // if (+req.params.id > tours.length) {
  //   return res.status(404).json({ status: 'Fail to update', message: 'Invalid ID' })
  // }
  res.status(200).json({ status: 'success', data: '<Update tour here...>' })
}

exports.deleteTour = (req, res) => {
  // if (+req.params.id > tours.length) {
  //   return res.status(404).json({ status: 'Fail to delete', message: 'Invalid ID' })
  // }
  res.status(204).json({ status: 'success', data: 'null' })
}
