import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const cache = new InMemoryCache();
const resolvers = {
	Mutation: {
		changeNav: (_root, variables, {cache, getCacheKey}) => {
			const { key } = variables;
			const query = gql`
          query local {
              nav @client
          }
			`;
			const data = cache.readQuery({ query });
			data.nav = key;
			cache.writeData({ data });
		}
	}
};

export const client = new ApolloClient({
	uri: 'http://localhost:8090/graphql',
	cache,
	resolvers,
});

const initCacheData = {
	data: {
		nav: '1'
	}
};

cache.writeData(initCacheData);
client.onResetStore(() => cache.writeData(initCacheData));
