'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredients = sequelize.define('Ingredients', {
    amount: {
      type: DataTypes.NUMERIC,
      validate: {
        notEmpty: true,
        min: 0
      }
    },
    measurementUnitId: DataTypes.INTEGER,
    foodStuff: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
    },
    recipeId: DataTypes.INTEGER
  }, {});
  Ingredients.associate = function(models) {
    // associations can be defined here
    Ingredients.belongsTo(models.Recipes, {
      foreignKey: 'recipeId'
    });
    Ingredients.belongsTo(models.MeasurementUnit, {
      foreignKey: 'measurementUnitId'
    });

  };
  return Ingredients;
};