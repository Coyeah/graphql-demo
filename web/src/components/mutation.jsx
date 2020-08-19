import React, { useRef } from "react";
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_TODO = gql`
    mutation addTodo ($content: String!) {
        addTodo(content:$content){
            success
            todoList{
                _id
                content
                completed
            }
        }
    }
`;

const GET_TODOS = gql`
    query GetTodoList {
        todoList{
            _id
            content
            completed
        }
    }
`;

export const AddItem = () => {
	const inputRef = useRef(null);
	console.log('AddItem render');
	return (
		<Mutation
			mutation={ADD_TODO}
			update={(cache, {data: {addTodo}}) => {
				const {todolist} = cache.readQuery({query: GET_TODOS});
				if (addTodo.success) {
					cache.writeQuery({
						query: GET_TODOS,
						data: {
							todoList: [...todolist || [], ...addTodo.todoList || []]
						}
					});
				}
			}}
		>
			{(addTodo, {loading, error, data}) => {
				return (
					<div style={{display: 'flex'}}>
						<input ref={inputRef}/>
						<button
							onClick={() => {
								const value = inputRef.current.value;
								if (!value) return;
								addTodo({variables: {content: value}}).then(() => {
									inputRef.current.value = '';
								});
							}}
						>
							+
						</button>
					</div>
				)
			}}
		</Mutation>
	)
}