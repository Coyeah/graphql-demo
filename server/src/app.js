const Koa = require('koa');
const cors = require('koa2-cors');
const {ApolloServer} = require('apollo-server-koa');

const todoResolvers = require('./graphql/resolvers/todo');
const todoTypeDefs = require('./graphql/typeDefs/todo');

const server = new ApolloServer({
	typeDefs: [todoTypeDefs],
	resolvers: [todoResolvers],
});

const app = new Koa();
app.use(cors());
server.applyMiddleware({app});

app.listen({port: 8090}, () => {
	console.log(`🚀 Server ready at http://localhost:8090${server.graphqlPath}`)
})