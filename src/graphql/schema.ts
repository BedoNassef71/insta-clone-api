import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: Int!
    username: String!
    password: String!
    profile: Profile
    posts: [Post!]!
  }

  type Profile {
    id: Int!
    bio: String
    user: User!
  }

  type Post {
    id: Int!
    title: String!
    content: String!
    author: User!
  }

  type Auth {
    token: String!
  }

  type Query {
    users: [User!]!
    user(username: String!): User
    posts(username: String!): [Post!]!
  }

  type Mutation {
    register(username: String!, password: String!): String
    login(username: String!, password: String!): String
    createPost(title: String!, content: String!): Post
  }
`;
