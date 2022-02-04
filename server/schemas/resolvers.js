const { flowTalk, dailyInfo, User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    flowTalks: async () => {
      return await flowTalk.find();
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      console.log("you made it");
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    // // createFlowTalk: async (parent, args) => {
    // //   const flowTalkData = await flowTalk.create(args);
    // //   console.log(flowTalkData);
    // //   return flowTalkData;
    // },
    createFlowTalk: async (
      parent,
      { flowTalkText, flowTalkTitle },
      context
    ) => {
      console.log(context.user);
      if (context.user) {
        const flowTalkData = await flowTalk.create({
          flowTalkText,
          flowTalkTitle,
          flowTalkAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { flowTalk: flowTalkData._id } }
        );

        return flowTalkData;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    createComment: async (parent, args) => {
      const commentData = await comment.create(args);
      return commentData;
    },
    createdailyInfo: async (parent, args) => {
      const dailyInfoData = await dailyInfo.create(args);
      return dailyInfoData;
    },
    /*remove flowTalk code*/
    removeflowTalk: async (parent, { flowTalkId }, context) => {
      if (context.user) {
        const flowTalkData = await flowTalk.findOneAndDelete({
          _id: flowTalkId,
          flowTalkAuthor: context.user.username,
        });

        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $pull: { flowTalk: flowTalk._id } }
        // );

        return flowTalkData;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    /*deleting comments */
    removeComment: async (parent, { flowTalkId, commentId }, context) => {
      if (context.user) {
        return commentId.findOneAndUpdate(
          { _id: commentId },
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
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
