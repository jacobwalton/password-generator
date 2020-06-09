const connection = require("../config/connection");
const tableName = "burgers";
const orm = {
  selectAll: function (burgers) {
    const queryString = "SELECT * FROM" + tableName;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  addCharacter: function (burgers, callback) {
    var queryString =
      "INSERT INTO" + tableName + "(burger_name, devoured) VALUES (?,?)";

    connection.query(
      queryString,
      [burgers.burger_name, burgers.devoured],
      function (err, result) {
        callback(result);
      }
    );
  },

  updateOne: function (burgers, callback) {
    const queryString = "UPDATE " + tableName + " SET burger_name=? WHERE id=?";

    connection.query(queryString, [burgers.text, burgers.id], function (
      err,
      result
    ) {
      callback(result);
    });
  },
};

module.exports = orm;
