const { gql } = require("apollo-server-express");

const typeDefs = gql`

type Auth {
    token: ID!
    user: User
}

type User {
    username: String
}

type dailyInfo {
    date: String
    flow: Int
    pain: Int
    mood: String
    cravings: String
    notes: String
}

type flowTalk {
    _id: ID
    flowTalkTitle: String
    flowTalkText: String
    flowTalkAuthor: String
    createdAt: String
}

type comment {
    commentText: String
    commentAuthor: String
}

type Query {
    flowTalks: [flowTalk]
}

type Mutation {
    createFlowTalk(flowTalkTitle: String!, flowTalkText: String!, flowTalkAuthor: String!) : flowTalk

    createdailyInfo(date: String!, flow: Int!, pain: Int!, mood: String!, cravings: String!, notes: String!) : dailyInfo

    createComment(commentText: String!, commentAuthor: String!) : comment

    login(email: String!, password: String!): Auth

    removeflowTalk(flowTalkId: ID!): flowTalk

    removeComment(flowtalkId: ID!, commentId: ID!): flowTalk
}
`;

module.exports = typeDefs;
