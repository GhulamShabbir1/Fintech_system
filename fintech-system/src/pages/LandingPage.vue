<template>
  <q-page class="flex flex-center column">
    <div class="text-h3 q-mb-lg">Welcome to Fintech System</div>

    <!-- Buttons -->
    <div class="row q-gutter-md">
      <q-btn color="primary" label="Create New Account" @click="goToRegister" />
      <q-btn color="secondary" label="Login" @click="goToLogin" />
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToRegister = () => {
  router.push('/register')
}

const goToLogin = () => {
  router.push('/login')
}
</script>
