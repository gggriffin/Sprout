module.exports = function (sequelize, DataTypes) {
  var apiLists = sequelize.define("apiLists", {
    title: {
      type: DataTypes.STRING(75),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    link: {
      type: DataTypes.STRING(75),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    type: {
      type: DataTypes.STRING(75),
      allowNull: false,
      validate: {
          len: [1]
      }
  }
  });
  return apiLists;
};