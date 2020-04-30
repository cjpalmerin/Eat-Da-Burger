// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(inputIDK ,cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [], function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },
    
    insertOne: function(inputIDK ,cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [], function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },

    updateOne: function(inputIDK ,cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [], function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },

}

module.exports = orm;