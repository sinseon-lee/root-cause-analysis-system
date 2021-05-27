// const express = require('express');
// const meRoute = express.Router();

// // Student model
// let MEModel = require('../model/ManagedElement')

// meRoute.route('/').get((req, res) => {
//     MEModel.find((error, data) => {
//      if (error) {
//        return next(error)
//      } else {
//        res.json(data)
//      }
//    })
//  })

//  meRoute.route('/create-me').post((req, res, next) => {
//     MEModel.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// });

// meRoute.route('/edit-me/:id').get((req, res) => {
//    MEModel.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// // Update student
// meRoute.route('/update-me/:id').post((req, res, next) => {
//   MEModel.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data)
//       console.log('Managed Element successfully updated!')
//     }
//   })
// })

// // Delete student
// meRoute.route('/delete-me/:id').delete((req, res, next) => {
//   MEModel.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

// module.exports = meRoute;
