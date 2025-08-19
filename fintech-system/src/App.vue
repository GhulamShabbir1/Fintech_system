<template>
  <q-page class="landing-page" :class="{ 'dark-mode': isDark }">
    <!-- Background elements with Quasar animation -->
    <div class="background-elements">
      <q-transition
        appear
        enter="fadeIn"
        leave="fadeOut"
        duration="1000"
      >
        <div class="circle circle-1"></div>
      </q-transition>
      
      <q-transition
        appear
        enter="zoomIn"
        leave="zoomOut"
        duration="1500"
      >
        <div class="circle circle-2"></div>
      </q-transition>
      
      <q-transition
        appear
        enter="slideUp"
        leave="slideDown"
        duration="2000"
      >
        <div class="circle circle-3"></div>
      </q-transition>
      
      <div class="transaction-animation">
        <q-transition
          v-for="i in 12"
          :key="i"
          appear
          enter="fadeIn"
          leave="fadeOut"
          :duration="500 + (i * 100)"
        >
          <div class="transaction-line" :style="transactionStyle(i)"></div>
        </q-transition>
      </div>
    </div>

    <div class="container">
      <!-- Theme toggle with bounce animation -->
      <div class="theme-toggle">
        <q-transition appear enter="bounceIn" duration="1000">
          <q-btn 
            round 
            :icon="isDark ? 'light_mode' : 'dark_mode'" 
            @click="toggleDarkMode"
            class="toggle-btn"
            color="primary"
          />
        </q-transition>
      </div>

      <!-- Main content with staggered animations -->
      <main class="main-content">
        <!-- Animated title with flip animation -->
        <q-transition appear enter="flipInX" duration="1000">
          <h1 class="title">
            <span class="title-gradient">FinTrack Pro</span>
          </h1>
        </q-transition>
        
        <q-transition appear enter="fadeIn" duration="1000" delay="300">
          <p class="subtitle">
            Your Ultimate Financial Management Solution
          </p>
        </q-transition>

        <!-- Features section with staggered animations -->
        <div class="row features">
          <div 
            v-for="(feature, index) in features" 
            :key="index" 
            class="col-md-4 feature-card"
          >
            <q-transition
              appear
              :enter="index % 2 === 0 ? 'slideInLeft' : 'slideInRight'"
              :duration="800 + (index * 100)"
              :delay="index * 100"
            >
              <div>
                <div class="feature-icon">
                  <q-icon :name="feature.icon" size="xl" />
                </div>
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.description }}</p>
              </div>
            </q-transition>
          </div>
        </div>

        <!-- Action buttons with pulse animation on hover -->
        <div class="action-buttons">
          <q-transition appear enter="zoomIn" duration="800" delay="600">
            <q-btn
              label="Login"
              class="btn-login"
              color="primary"
              @click="login"
              rounded
              no-caps
            >
              <q-tooltip>Access your account</q-tooltip>
            </q-btn>
          </q-transition>
          
          <q-transition appear enter="zoomIn" duration="800" delay="800">
            <q-btn
              label="Register"
              class="btn-register"
              color="secondary"
              @click="register"
              rounded
              no-caps
            >
              <q-tooltip>Create new account</q-tooltip>
            </q-btn>
          </q-transition>
        </div>
      </main>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isDark = ref(false);
    
    const features = [
      {
        icon: 'account_balance_wallet',
        title: 'Expense Tracking',
        description: 'Track all your expenses in one place with detailed categorization.'
      },
      {
        icon: 'analytics',
        title: 'Analytics',
        description: 'Get powerful insights with beautiful charts and reports.'
      },
      {
        icon: 'language',
        title: 'Multi-Currency',
        description: 'Manage finances in multiple currencies with automatic conversions.'
      }
    ];

    const toggleDarkMode = () => {
      isDark.value = !isDark.value;
    };

    const transactionStyle = (index) => {
      const angle = (index * 30) + (Math.random() * 15);
      const duration = 5 + (Math.random() * 10);
      return {
        '--angle': `${angle}deg`,
        '--duration': `${duration}s`,
        '--delay': `${Math.random() * 5}s`
      };
    };

    const login = () => {
      // Login logic
    };

    const register = () => {
      // Register logic
    };

    return {
      isDark,
      features,
      toggleDarkMode,
      transactionStyle,
      login,
      register
    };
  }
}
</script>

<style scoped>
/* Base styles */
.landing-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  padding: 2rem 0;
}

/* Background elements */
.background-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
}

.circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
}

.circle-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  top: -100px;
  left: -100px;
}

.circle-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
  bottom: -150px;
  right: -100px;
}

.circle-3 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Transaction animation */
.transaction-animation {
  position: absolute;
  width: 100%;
  height: 100%;
}

.transaction-line {
  position: absolute;
  width: 2px;
  height: 100px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0));
  bottom: 0;
  left: 50%;
  transform-origin: bottom center;
  animation: transactionMove var(--duration) linear var(--delay) infinite;
  opacity: 0.6;
}

@keyframes transactionMove {
  0% {
    transform: rotate(var(--angle)) translateY(0);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: rotate(var(--angle)) translateY(-100vh);
    opacity: 0;
  }
}

/* Theme toggle */
.theme-toggle {
  text-align: right;
  margin-bottom: 2rem;
}

.toggle-btn {
  background: rgba(255,255,255,0.2);
  border: none;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

/* Main content */
.main-content {
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 4rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.title-gradient {
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #48dbfb);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: titleGradient 8s ease infinite;
  background-size: 200% 200%;
}

@keyframes titleGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  color: #666;
}

/* Features */
.features {
  margin: 4rem 0;
}

.feature-card {
  padding: 2rem;
  margin-bottom: 2rem;
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--q-primary);
}

.feature-card h3 {
  margin-bottom: 1rem;
  color: #333;
}

.feature-card p {
  color: #666;
}

/* Action buttons */
.action-buttons {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn-login, .btn-register {
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  letter-spacing: 1px;
}

.btn-login:hover {
  animation: pulse 1s infinite;
}

.btn-register:hover {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* Dark mode styles */
.dark-mode {
  background: #121212;
  color: #fff;
}

.dark-mode .subtitle {
  color: #aaa;
}

.dark-mode .feature-card {
  background: rgba(30,30,30,0.7);
  border-color: rgba(255,255,255,0.1);
}

.dark-mode .feature-card h3 {
  color: #fff;
}

.dark-mode .feature-card p {
  color: #aaa;
}

.dark-mode .btn-register {
  background: rgba(30,30,30,0.7);
  color: #fff;
  border-color: #48dbfb;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-login, .btn-register {
    width: 100%;
    max-width: 250px;
  }
}
</style>