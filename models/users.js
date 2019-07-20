module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
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
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    apisSubmitted: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    librariesSubmitted: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    projectsSubmitted: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    commentHistory: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return users;
};
