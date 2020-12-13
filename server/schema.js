const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
} = graphql;

// MongoDB schemas
const { Restaurant } = require("./model");

// Returns an object with all the fields to be updated, this is a generic way to get around of fields that were not provided
const getFieldsForUpdate = (args) => {
  const entries = Object.keys(args);
  const updates = {};

  for (let i = 0; i < entries.length; i++) {
    updates[entries[i]] = Object.values(args)[i];
  }

  return updates;
};

const editObjectType = (id, updates, schema) => {
  return schema
    .findOneAndUpdate(
      { _id: id },
      { $set: updates },
      { new: true, useFindAndModify: false }
    )
    .exec()
    .then((type) => type)
    .catch((err) => console.error(err));
};

const RestaurantType = new GraphQLObjectType({
  name: "Restaurant",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    number: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    details: { type: GraphQLString },
    tags: { type: GraphQLList },
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat },
    isDeleted: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
  }),
});

// ROOT QUERY

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    restaurant: {
      type: RestaurantType,
      args: { id: { type: GraphQLID } },
      resolve( args) {
        return Restaurant.findById(args.id);
      },
    },
    restaurants: {
      type: new GraphQLList(RestaurantType),
      resolve() {
        return Restaurant.find({});
      },
    },
  },
});

// MUTATION
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addRestaurant: {
      type: RestaurantType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        number: { type: new GraphQLNonNull(GraphQLString) },
        imageUrl: { type: GraphQLString },
        details: { type: new GraphQLNonNull(GraphQLString) },
        tags: { type: new GraphQLNonNull(GraphQLList) },
        latitude: { type: new GraphQLNonNull(GraphQLFloat) },
        longitude: { type: new GraphQLNonNull(GraphQLFloat) },
      },
      resolve({
        name,
        address,
        number,
        imageUrl,
        details,
        tags,
        latitude,
        longitude,
      }) {
        const restaurant = new Restaurant({
          name,
          address,
          number,
          imageUrl,
          details,
          tags,
          latitude,
          longitude,
          status: true,
        });
        return restaurant.save();
      },
    },
    editRestaurant: {
      type: RestaurantType,
      args: {
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        number: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
        details: { type: GraphQLString },
        tags: { type: GraphQLList },
        latitude: { type: GraphQLFloat },
        longitude: { type: GraphQLFloat },
      },
      resolve(args) {
        const updates = getFieldsForUpdate(args);
        return editObjectType(args.id, updates, Restaurant);
      },
    },
    deleteRestaurant: {
      type: RestaurantType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve({ id }) {
        const restaurant = await Restaurant.findOneAndUpdate(
          { _id: id },
          { $set: { status: false } },
          { new: true, useFindAndModify: false }
        );
        return restaurant;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
