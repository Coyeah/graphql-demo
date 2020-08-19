import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './client';
import './App.css';
import { List } from "./components/query";
import { AddItem } from "./components/mutation";
import { Filter } from "./components/filter";

function App() {
	return (
		<ApolloProvider client={client}>
			<div style={{display: 'flex'}}>
				<Filter filter={'a'}>a</Filter>
				<Filter filter={'b'}>b</Filter>
				<Filter filter={'c'}>c</Filter>
				<Filter filter={'d'}>d</Filter>
			</div>
			<div className="App">
				<AddItem/>
				<List/>
			</div>
			<button onClick={() => {
				console.log('reset');
				client.resetStore();
			}}>reset</button>
		</ApolloProvider>
	);
}

export default App;
