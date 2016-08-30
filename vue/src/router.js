import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({mode: 'html5'})

// VueRouter only accepts components to process path changes.
// So I put small components for each paths and let them dispatch
// event when a path is changed. The parent component App will cacth
// the event and broadcast it to TodoList component.
// I don't know if this is the best way for separated codes though.
// This is how this router works for now.
router.map({
	'/': {
		component: {
			ready () {
				this.$dispatch('router', 'all')
			}
		}
	},
	'/active': {
		component: {
			ready () {
				this.$dispatch('router', 'active')
			}
		}
	},
	'/completed': {
		component: {
			ready () {
				this.$dispatch('router', 'completed')
			}
		}
	},
})

export default router
