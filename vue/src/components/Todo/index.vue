<template>
	<li class="todo" :class="{completed: todo.completed, editing: todo == editedTodo}">
		<div class="view">
			<input class="toggle" type="checkbox" v-model="todo.completed">
			<label @dblclick="editTodo(todo)">{{todo.title}}</label>
			<button class="destroy" @click="removeTodo(todo)"></button>
		</div>
		<input class="edit" v-model="todo.title" v-todo-focus="todo == editedTodo" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
	</li>
</template>

<script>
	import Vue from 'vue'

	export default {
		props: ['todo'],
		data () {
			return {
				beforeEditCache: null,
				editedTodo: null,
			}
		},
		methods: {
			removeTodo (todo) {
				this.$dispatch('removeTodo', todo)
			},
			editTodo (todo) {
				this.beforeEditCache = todo.title
				this.editedTodo = todo
			},
			doneEdit (todo) {
				if (!this.editedTodo) return
				this.editedTodo = null
				todo.title = todo.title.trim()
				if (!todo.title) this.removeTodo(todo)
			},
			cancelEdit (todo) {
				this.editedTodo = null
				todo.title = this.beforeEditCache
			},
		},
		directives: {
			'todo-focus' (value) {
				if (!value) return
				const el = this.el
				Vue.nextTick(() => {
					el.focus()
				})
			}
		},
	}
</script>
