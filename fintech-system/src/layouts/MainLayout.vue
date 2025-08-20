<template>
  <q-layout view="hHh lpR fFf">
    <AnimateBackground />
    <q-header elevated class="text-white header-gradient">
      <q-toolbar>
        <q-toolbar-title class="row items-center no-wrap">
          <q-icon name="payments" class="q-mr-sm" />
          <span>Fintech System</span>
        </q-toolbar-title>
        <q-space />
        <q-btn flat dense icon="home" @click="$router.push('/')" />
        <q-btn flat dense icon="stacked_bar_chart" @click="$router.push('/stats')" />
        <q-btn flat dense icon="receipt_long" @click="$router.push('/transactions')" />
        <q-btn flat dense icon="login" @click="$router.push('/login')" />
        <q-btn flat dense icon="person_add" @click="$router.push('/register')" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <transition name="fade-slide" mode="out-in">
        <router-view />
      </transition>
    </q-page-container>

    <q-footer class="bg-grey-1 text-grey-8">
      <div class="q-pa-sm text-center">© {{ new Date().getFullYear() }} Fintech System</div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import AnimateBackground from '../components/common/AnimateBackground.vue'
</script>

<style scoped>
</style>

