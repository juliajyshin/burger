// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

// Code that will call the ORM cuntions using burger specific input for the ORM
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("cats", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burger.js)
module.exports = burger;