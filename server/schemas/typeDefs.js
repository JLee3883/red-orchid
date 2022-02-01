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

type Query {
    flowTalks: [flowTalk]
}

type Mutation {
    createFlowTalk(flowTalkTitle: String!, flowTalkText: String!, flowTalkAuthor: String!) : flowTalk

    createdailyInfo(date: String!, flow: Int!, pain: Int!, mood: String!, cravings: String!, notes: String!) : dailyInfo

    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;
