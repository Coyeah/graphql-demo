import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const query = gql`
    {
        todoList{
            _id
            content
            completed
        }
    }
`;

export const List = () => {
	return (
		<Query query={query}>
			{({loading, error, data}) => {
				if (loading) return <p>Loading...</p>;
				if (error) return <p>Error :(</p>;
				return data.todoList.map(item => (
					<div key={item._id} style={{padding: 10}}>
						<div>{item.content}</div>
						<div>completed: {item.completed ? 'true' : 'false'}</div>
						<hr/>
					</div>
				));
			}}
		</Query>
	)
}