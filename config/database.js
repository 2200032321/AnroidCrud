const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('freelancingv4', 'root', 'Root@123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { sequelize }; // ✅ Ensure you're exporting it correctly
