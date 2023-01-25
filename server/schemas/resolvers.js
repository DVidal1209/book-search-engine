const { User} = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    getUsers: async () => {
      return User.find({});
    }
  },
  Mutation: {
   
  },
};

module.exports = resolvers;
