import RestaurantService from "./service";

const resolvers = {
  Query: {
    restaurants: (_, args) => {
      return RestaurantService.getAllRestaurants();
    },
    restaurant: (_, { id }) => {
      return RestaurantService.getRestaurantById(id);
    },
  },
  Mutation: {
    addRestaurant: (_, { name,
      address,
      number,
      imageUrl,
      details,
      tags,
      latitude,
      longitude }) => {
      return RestaurantService.addRestaurant({ name,
        address,
        number,
        imageUrl,
        details,
        tags,
        latitude,
        longitude });
    },
    editRestaurant: (_, { name, address,
      number,
      imageUrl,
      details,
      tags,
      latitude,
      longitude}) => {
      return RestaurantService.editRestaurant({ name,
        address,
        number,
        imageUrl,
        details,
        tags,
        latitude,
        longitude });
    },
    deleteRestaurant: (_, { id }) => {
      return RestaurantService.deleteRestaurant(id);
    },
  },
};

module.exports = {
  resolvers,
};
