const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const Query = require('./resolvers/Query');
const Animal = require('./resolvers/Animal');
const Category = require('./resolvers/Category');
const Mutation = require('./resolvers/Mutation');
const { categories, animals, mainCards } = require('./db');


const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Animal,
    Category
  },
  context: {
    mainCards,
    animals,
    categories
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});