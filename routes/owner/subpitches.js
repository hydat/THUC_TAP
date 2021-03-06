const express = require('express')
const router = express.Router();

var Subpitch = require('../../models/subpitch')

router.post('/create', function (req, res, next) {
  subpitch = new Subpitch({
    name: req.body.name,
    desc: req.body.desc,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    subpitch_type: req.body.subpitch_type,
    pitch_id: req.body.pitch_id,
    active: req.body.active,
    time: req.body.time
  })

  let promise = subpitch.save();

  promise.then(function (doc) {
    res.status(200).json(doc)
  })

  promise.catch(function (err) {
    res.status(500).json(err)
  })
})

router.get('/list/:id', function (req, res, next) {
  let promise = Subpitch.find({_id:req.params.id}).exec()

  promise.then(function (doc) {
    res.status(200).json(doc)
  })

  promise.catch(function (err) {
    res.status(500).json(err)
  })
})

router.post('/update/:id', function(req, res, next){
  let promise = Subpitch.updateOne({_id:req.params.id},req.body).exec()

  promise.then(function (doc) {
    res.status(200).json(doc)
  })

  promise.catch(function (err) {
    res.status(500).json(err)
  })
})

router.delete('/delete/:id',function(req, res, next){
  let promise = Subpitch.deleteOne({_id:req.params.id}).exec()

  promise.then(function (doc) {
    res.status(200).json({msg:"Delete successfully"})
  })

  promise.catch(function (err) {
    res.status(500).json(err)
  })
})

module.exports = router