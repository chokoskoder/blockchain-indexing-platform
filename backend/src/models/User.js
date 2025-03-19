const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  googleId: {
    type: DataTypes.STRING,
    unique: true,
  },
  postgresCredentials: {
    type: DataTypes.JSONB, 
    allowNull: true,
  },
});

module.exports = User;
