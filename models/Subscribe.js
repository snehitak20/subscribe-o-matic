const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Subscribe extends Model {}

Subscribe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        team_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'team',
                key: 'id',
            },
        },
    }
);

module.exports = Subscribe;