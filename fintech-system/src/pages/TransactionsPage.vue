<template>
  <q-page class="q-pa-md">
    <TransactionTable @view="open" />
    <TransactionDetailModal v-model="show" :tx="selected" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import TransactionTable from '../components/transactions/TransactionTable.vue'
import TransactionDetailModal from '../components/transactions/TransactionDetailModal.vue'

const show = ref(false)
const selected = ref(null)
const open = (tx) => { selected.value = tx; show.value = true }
</script>

<style scoped>
</style>
