'use strict' ; 
module.exports = function (app) { 
var Controller = require('../controllers')

// Create a new Tanaman
app.route('/tanaman').post(Controller.tanamanController.createTanaman);

// Get all Tanaman
app.route('/tanaman').get(Controller.tanamanController.getTanaman);

// Get a tanaman by ID
app.route('/tanaman/:tanamanid').get(Controller.tanamanController.getTanamanbyID);

// Update a tanaman by ID
app.route('/tanaman').put(Controller.tanamanController.updateTanaman);

// Delete a tanaman by ID
app.route('/tanaman/:id_tanaman').delete(Controller.tanamanController.deleteTanaman);

}



