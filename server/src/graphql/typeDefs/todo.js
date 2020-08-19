const {gql} = require('apollo-server-koa');

const typeDefs = gql`
    type todo {
        _id: ID!
        content: String!
        completed: Boolean!
    }
    type Query {
        todoList: [todo]!
    }
    type updateResponse {
        success: Boolean!
        todoList:[todo]!
    }
    type Mutation {
        addTodo(content: String): updateResponse!
    }
`;

module.exports = typeDefs;