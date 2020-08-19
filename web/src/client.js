import ApolloClient from 'apollo-boost';
// import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const resolvers = {
	toggleFilter: (_root, variables, {cache, getCacheKey}) => {
		console.log(_root);
		console.log(variables);
		console.log(cache, getCacheKey);
	}
}

export const client = new ApolloClient({
	uri: 'http://localhost:8090/graphql',
	cache,
	resolvers,
});

const initCacheData = {
	data: {
		visibilityFilter: 'a',
	}
};

cache.writeData(initCacheData);
client.onResetStore(() => cache.writeData(initCacheData));
