// Filter `todos` list into `all`, `active`, or `completed` by each item's state
export const filters = {
	all (todos) {
		return todos
	},
	active (todos) {
		return todos.filter((todo) => !todo.completed)
	},
	completed (todos) {
		return todos.filter((todo) => todo.completed)
	},
}
