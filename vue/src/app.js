import Vue from 'vue'

import router from './router'

import TodoList from './components/TodoList/index.vue'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import 'todomvc-common/base'

const init = (ev) => {
	document.removeEventListener(ev.type, init)

	const App = Vue.extend({
		components: {TodoList},
		events: {
			// Path change event should propagate downward to
			// TodoList component which is a child of App component
			// so that TodoList can update its ViewModel when
			// path is changed.
			router (prop) {
				this.$broadcast('router', prop)
			},
		},
	})

	router.start(App, '.todoapp')
}

document.addEventListener('DOMContentLoaded', init, false)
