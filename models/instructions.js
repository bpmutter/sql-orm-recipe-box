'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instructions = sequelize.define('Instructions', {
    specification: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
        }
    },
    listOrder: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
        min: 0,
      }
    },
    recipeId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      }
    }
  }, {});
  Instructions.associate = function(models) {
   Instructions.belongsTo(models.Recipes, {
     foreignKey: 'recipeId'
   });

  };
  return Instructions;
};