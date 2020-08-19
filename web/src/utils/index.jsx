import React from 'react';
import { Query, Mutation } from 'react-apollo';

export function withQuery(payload) {
	const {Component, ...rest} = payload;
	return function (props) {
		return (
			<Query {...rest}>
				{(result) => (
					<Component query={result} {...props}/>
				)}
			</Query>
		)
	}
}

export function withMutation(payload) {
	const {Component, ...rest} = payload;
	return function (props) {
		return (
			<Mutation {...rest}>
				{(result) => (
					<Component mutation={result} {...props}/>
				)}
			</Mutation>
		)
	}
}
