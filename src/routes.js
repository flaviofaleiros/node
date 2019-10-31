const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');


const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingControllers = require('./controllers/BookingControllers');


const routes = express.Router();

const uplaod = multer(uploadConfig); 

routes.post( '/sessions', SessionController.store );


routes.get( '/spots', SpotController.index );
routes.post( '/spots', uplaod.single('thumbnail'), SpotController.store );
routes.get( '/dashboard', DashboardController.show );

routes.post( '/spots/:spot_id/bookings', BookingControllers.store );

module.exports = routes; 

// app.put('/users/:id',(rec, res) => {
//     return  res.json({mesage: 'Id: '+rec.params.id+  '  Flavio Augusto Faleiros ' + ' Tem  '+rec.query.idade+' Anos.'});