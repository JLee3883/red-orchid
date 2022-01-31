const db = require('../config/connection');
const { User } = require('../models');

const userData = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
  
    // const users = 
    await User.create(userData);
    
  } catch (error) {
    console.error(error)
    process.exit(1)
  }

  console.log('Users seeded!');
  process.exit(0);
});
