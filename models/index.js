const User = require('./User');
const Team = require('./Team');
const Subscribe = require('./Subscribe');

User.hasMany(Subscribe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Subscribe.hasOne(Team, {
    foreignKey: 'team_id',
    onDelete: 'CASCADE'
});

Subscribe.hasOne(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Team, Subscribe };