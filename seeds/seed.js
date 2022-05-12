
const sequelize = require('../config/connection');
const { User, Team } = require('../models');

const userData = require('./userData.json');
const teamData = require('./teamData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const team of teamData) {
    await Team.create({
      ...team,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
