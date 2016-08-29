<template>
	<!-- This section should be hidden by default and shown when there are todos -->
	<section class="main" v-show="todos.length" v-cloak>
		<input class="toggle-all" type="checkbox" v-model="allDone">
		<label for="toggle-all">Mark all as complete</label>
		<ul class="todo-list">
			<!-- These are here just to show the structure of the list items -->
			<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
			<todo v-for="todo in filteredTodos" :todo.sync="todo"></todo>
		</ul>
	</section>
</template>

<script>
	import Todo from '../Todo/index.vue'

	export default {
		props: ['todos', 'filteredTodos'],
		components: {Todo},
		events: {
			removeTodo (todo) {
				this.todos.$remove(todo)
			}
		},
	}
</script>
