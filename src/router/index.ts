import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '../components/shared/HomeView.vue'
import AboutView from '../components/shared/AboutView.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;