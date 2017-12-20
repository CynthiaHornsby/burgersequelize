var db = require("../models");

module.exports = function(app) {


    app.get("/", function(req, res) {

        db.Burger.findAll({}).then(function(dbBurger) {

            res.json(dbBurger);
        });
    });

    app.post("/", function(req, res) {

        db.Burger.create({
            burger: req.body.text
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    app.put("/", function(req, res) {

        db.Burger.update({
            burger: req.body.text,
            devoured: true
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });


};
