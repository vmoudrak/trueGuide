import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Restaurant {
    id: ID!
    name: String!
    address: String!
    number: String!
    imageUrl: String
    details: String!
    tags: [String!]
    latitude: Float!
    longitude: Float!
    errors: [Error]
    isDeleted: Boolean
    createdAt: String
  }

  extend type Query {
    restaurant(id: ID!): Restaurant
    restaurants: [Restaurant]
  }

  extend type Mutation {
    addRestaurant(
      name: String!
      address: String!
      number: String!
      imageUrl: String
      details: String!
      tags: [String!]
      latitude: Float!
      longitude: Float!
    ): Restaurant
    editRestaurant(
      id: ID!
      name: String
      address: String
      number: String
      imageUrl: String
      details: String
      tags: [String]
      latitude: Float
      longitude: Float
    ): Restaurant
    deleteRestaurant(id: ID!): Restaurant
  }
`;

module.exports = {
  typeDefs,
};
