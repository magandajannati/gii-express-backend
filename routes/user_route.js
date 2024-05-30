module.exports = function (app) { 

//Mengimpor controller
var Controller = require('../controllers')

// Create a new user
app.route('/users').post(Controller.userController.createUser);

// Get all User
app.route('/users').get(Controller.userController.getUser);

// Get a user by ID
app.route('/user/:userid').get(Controller.userController.getUserbyID);

// Update a user by ID
app.route('/users').put(Controller.userController.updateUser);

// Delete a user by ID
app.route('/users/:id_user').delete(Controller.userController.deleteUser);

}



