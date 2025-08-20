<template>
  <div class="row q-col-gutter-md">
    <div class="col-12 col-md-8">
      <RevenueChart :data="revenue" />
    </div>
    <div class="col-12 col-md-4">
      <MethodsDistributionCharts :data="methods" />
    </div>
    <div class="col-12">
      <TransactionTrendsChart :data="trends" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../../plugins/axios'
import RevenueChart from './charts/RevenueChart.vue'
import MethodsDistributionCharts from './charts/MethodsDistributionCharts.vue'
import TransactionTrendsChart from './charts/TransactionTrendsChart.vue'

const revenue = ref([])
const methods = ref([])
const trends = ref([])

onMounted(async () => {
  const [r, m, t] = await Promise.all([
    api.get('/stats/revenue'),
    api.get('/stats/methods'),
    api.get('/stats/transactions')
  ])
  revenue.value = r.data
  methods.value = m.data
  trends.value = t.data
})
</script>

<style scoped>
</style>
