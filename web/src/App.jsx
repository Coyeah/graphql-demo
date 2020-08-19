import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './client/index';
import './App.css';
import 'antd/dist/antd.css';
import Content from './components/content';


function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Content/>
			</div>
		</ApolloProvider>
	);
}

export default App;
