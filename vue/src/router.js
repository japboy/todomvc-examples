import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({mode: 'html5'})

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
