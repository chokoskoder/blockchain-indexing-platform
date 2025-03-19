const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // Neon requires SSL
      rejectUnauthorized: false, // Allows self-signed certificates
    },
  },
  logging: false, // Set to true for debugging queries
});

// Test the connection
sequelize.authenticate()
  .then(() => console.log("✅ PostgreSQL Connected Successfully!"))
  .catch((err) => console.error("❌ PostgreSQL Connection Error:", err));

module.exports = sequelize;
