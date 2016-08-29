<template>
	<header class="header">
		<h1>todos</h1>
		<input class="new-todo" placeholder="What needs to be done?" autofocus v-model="newTodo" @keyup.enter="addTodo">
	</header>
</template>

<script>
	export default {
		props: ['todos'],
		data () {
			return {
				newTodo: '',
			}
		},
		methods: {
			addTodo () {
				const value = this.newTodo && this.newTodo.trim()
				if (!value) return
				this.todos.push({title: value, completed: false})
				this.newTodo = ''
			},
		},
	}
</script>
