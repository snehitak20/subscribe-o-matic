const User = require('./User');
const Team = require('./Team');
const Subscribe = require('./Subscribe');

User.hasMany(Subscribe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Subscribe.belongTo(User, {
    foreignKey: 'user_id'
});

Team.hasMany(Subscribe,{
    foreignKey: 'team_id',
    onDelete: 'CASCADE'
})
Subscribe.belongTo(Team, {
    foreignKey: 'team_id'
});



module.exports = { User, Team, Subscribe };