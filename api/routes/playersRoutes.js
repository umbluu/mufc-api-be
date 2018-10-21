'use strict';
module.exports = function(app) {
  var playerList = require('../controllers/playersController');

  // todoList Routes
  app.route('/players')
    .get(playerList.list_all_players)
    .post(playerList.create_a_player);


  app.route('/players/:playerId')
    .get(playerList.read_a_player)
    .patch(playerList.update_a_player)
    .delete(playerList.delete_a_player);
};
