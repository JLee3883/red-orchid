const { gql } = require("apollo-server-express");

const typeDefs = gql`

type Auth {
    token: ID!
    user: User
}

type User {
    
}

type flowTalk{
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
    login: 
}


`;

module.exports = typeDefs;
