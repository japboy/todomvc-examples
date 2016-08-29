<template>
	<todo-list-header :todos.sync="todos"></todo-list-header>
	<todo-list-main :todos.sync="todos" :filtered-todos="filteredTodos"></todo-list-main>
	<todo-list-footer :todos.sync="todos" :visibility="visibility" :remaining="remaining"></todo-list-footer>
</template>

<script>
	import todoStorage from '../../storage'
	import {filters} from '../../utils'

	import TodoListHeader from './header.vue'
	import TodoListMain from './main.vue'
	import TodoListFooter from './footer.vue'

	export default {
		data () {
			return {
				todos: todoStorage.fetch(),
				visibility: 'all',
			}
		},
		watch: {
			todos: {
				deep: true,
				handler: todoStorage.save,
			}
		},
		computed: {
			filteredTodos () {
				return filters[this.visibility](this.todos)
			},
			remaining () {
				return filters.active(this.todos).length
			},
			allDone: {
				get () {
					 this.remaining === 0
				},
				set (value) {
					this.todos.forEach((todo) => {
						todo.completed = value
					})
				},
			},
		},
		components: {
			TodoListHeader,
			TodoListMain,
			TodoListFooter,
		},
		events: {
			router (prop) {
				this.visibility = prop
			},
		},
	}
</script>
