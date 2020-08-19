const data = [
	{
		_id: "toa6mqpj5w",
		content: "html5",
		completed: false
	},
	{
		_id: "6wfu0frdy",
		content: "javascript",
		completed: false
	},
	{
		_id: "qkox1gdtdc",
		content: "css",
		completed: false
	}
];

module.exports = {
	Query: {
		todoList: () => data,
	},
	Mutation: {
		addTodo: (_, { content }) => {
			data.push({
				_id: Math.random().toString(36).substring(3),
				content,
				completed: false
			});
			return { success: true, todoList: data };
		}
	}
}