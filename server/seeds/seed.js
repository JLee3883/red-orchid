const db = require("../config/connection");
const { User, flowTalk } = require("../models");

const userData = require("./userSeeds.json");
const flowTalkData = require("./flowTalk.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});

    // const users =
    await User.create(userData);
    await flowTalk.deleteMany({});

    // const users =
    await flowTalk.create(flowTalkData);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  console.log("Users seeded!");
  process.exit(0);
});
