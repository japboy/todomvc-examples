<template>
	<!-- This footer should hidden by default and shown when there are todos -->
	<footer class="footer" v-show="todos.length" v-cloak>
		<!-- This should be `0 items left` by default -->
		<span class="todo-count"><strong v-text="remaining">0</strong> {{remaining | pluralize 'item'}} left</span>
		<!-- Remove this if you don't implement routing -->
		<ul class="filters">
			<li>
				<a v-link="{path: '/'}" :class="{selected: visibility == 'all'}">All</a>
			</li>
			<li>
				<a v-link="{path: '/active'}" :class="{selected: visibility == 'active'}">Active</a>
			</li>
			<li>
				<a v-link="{path: '/completed'}" :class="{selected: visibility == 'completed'}">Completed</a>
			</li>
		</ul>
		<!-- Hidden if no completed items are left ↓ -->
		<button class="clear-completed" v-show="todos.length > remaining" @click="removeCompleted">Clear completed</button>
	</footer>
</template>

<script>
	import {filters} from '../../utils'

	export default {
		props: ['todos', 'visibility', 'remaining'],
		methods: {
			removeCompleted () {
				this.todos = filters.active(this.todos)
			},
		},
	}
</script>
