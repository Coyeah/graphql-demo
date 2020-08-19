import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const GET_VISIBILITY_FILTER = gql`
    {
        visibilityFilter @client
    }
`;

const TOGGLE_FILTER = gql`
    mutation ToggleFilter($id: String!) {
        toggleFilter(id: $id) @client
    }
`;

export const Filter = ({filter, children}) => {
	return (
		<Query query={GET_VISIBILITY_FILTER}>
			{({data, client}) => {
				return (
					<Mutation
						mutation={TOGGLE_FILTER}
						update={(cache) => {
							cache.writeData({data: {visibilityFilter: filter}});
						}}
					>
						{toggle => (
							<div
								style={{
									backgroundColor: data.visibilityFilter === filter ? '#888' : '#fff',
									width: '100%',
									padding: 20
								}}
								onClick={() => {
									if (data.visibilityFilter === filter) return;
									// client.writeData({data: {visibilityFilter: filter}});
									toggle({variables: {id: filter}})
								}}
							>
								{children}
							</div>
						)}
					</Mutation>
				)
			}}
		</Query>
	)
}