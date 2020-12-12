import { gql } from "apollo-server-express";
import restaurant from "./restaurant";
import error from "./error";

import { DateISO } from "./scalars";

const resolvers = [
  restaurant.resolvers,
  DateISO.resolvers,
];

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
  ${error.typeDefs}
  ${restaurant.typeDefs}
  ${DateISO.typeDefs}
`;

module.exports = {
  resolvers,
  typeDefs,
};
