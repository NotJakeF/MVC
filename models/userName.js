const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const { PassThrough } = require('stream');

class UserName extends Model {}

UserName.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        // NOT NULL,
    },
    userName: {
        type: DataTypes.TEXT
    },
    pass: {
        type: DataTypes.TEXT
    }
}, {
    sequelize
});

module.exports = UserName;