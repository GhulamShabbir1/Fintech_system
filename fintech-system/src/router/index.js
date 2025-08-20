import { createRouter, createWebHistory } from 'vue-router'

// Correct way to import pages
import LandingPage from '../pages/LandingPage.vue'
import Login from '../pages/LoginPage.vue'
import Register from '../pages/RegisterPage.vue'
import Checkout from '../pages/CheckoutPage.vue'
import MerchantDashboard from '../pages/MerchantDashboardPage.vue'
import PaymentStatus from '../pages/PaymentStatus.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/checkout', component: Checkout },
  { path: '/dashboard', component: MerchantDashboard },
  { path: '/payments/status/:id', component: PaymentStatus },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
