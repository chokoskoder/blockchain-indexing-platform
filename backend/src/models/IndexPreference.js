const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const IndexPreferences = sequelize.define("IndexPreferences", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  indexType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  indexDetails: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
});

User.hasMany(IndexPreferences, { foreignKey: "userId" });
IndexPreferences.belongsTo(User, { foreignKey: "userId" });

module.exports = IndexPreferences;
