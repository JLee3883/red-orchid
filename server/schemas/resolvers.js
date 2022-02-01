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

    removeThought: async (parent, { thoughtId }, context) => {
      if (context.user) {
        const thought = await Thought.findOneAndDelete({
          _id: thoughtId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { thoughtId, commentId }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  }
};

module.exports = resolvers;
