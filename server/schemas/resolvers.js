const { flowTalk, dailyInfo, User} = require('../models');
const { signToken } = require('../utils/auth');

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

      const correctPw = await User.isCorrectPassword(password);

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
  }
};

module.exports = resolvers;
