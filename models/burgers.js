module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger: DataTypes.STRING,
        devoured: { Type: DataTypes.BOOLEAN, defaultValue: false }
    });

    return Burger;
}
