module.exports = function(sequelize, DataTypes) {
  var userList = sequelize.define("users", {
    id: {
      type: DataTypes.STRING(75),
      allowNull: false,
      validate: {
        len: [1]
      },
      primaryKey: true
    },
    provider: {
      type: DataTypes.STRING(75),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    displayName: {
      type: DataTypes.STRING(75),
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return userList;
};
