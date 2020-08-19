import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './client';
import './App.css';
import { List } from "./components/query";
import { AddItem } from "./components/mutation";

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<AddItem/>
				<List/>
			</div>
		</ApolloProvider>
	);
}

export default App;
