const { flowTalk, dailyInfo, User} = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError} = require("apollo-server-express");

const resolvers = {
  Query: {
   flowTalks : async () => {
     return await flowTalk.find()
   } 
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    createFlowTalk: async (parent, args) => {
      const flowTalkData = await flowTalk.create(args);
      return flowTalkData;
    },

    createdailyInfo: async (parent, args) => {
      const dailyInfoData = await dailyInfo.create(args);
      return dailyInfoData;
    },
  }
};

module.exports = resolvers;
