<template>
  <q-page class="q-pa-md flex flex-center">
    <q-card class="q-pa-lg shadow-2 rounded-borders" style="width:500px; max-width:95%;">
      <q-card-section>
        <div class="text-h6 text-center">Merchant Registration</div>
      </q-card-section>

      <q-form @submit.prevent="handleRegister" class="q-gutter-md">

        <!-- Business Name -->
        <q-input
          v-model="form.business_name"
          label="Business Name"
          outlined
          dense
          required
        />

        <!-- Logo (File Upload) -->
        <q-input
          filled
          type="file"
          accept="image/*"
          label="Business Logo"
          @change="onFileChange"
        />

        <!-- Bank Account Name -->
        <q-input
          v-model="form.bank_account_name"
          label="Bank Account Holder Name"
          outlined
          dense
        />

        <!-- Bank Account Number -->
        <q-input
          v-model="form.bank_account_number"
          label="Bank Account Number"
          outlined
          dense
        />

        <!-- Bank IFSC / SWIFT -->
        <q-input
          v-model="form.bank_ifsc_swift"
          label="Bank IFSC / SWIFT Code"
          outlined
          dense
        />

        <!-- Payout Preferences -->
        <q-select
          v-model="form.payout_preferences"
          :options="['daily','weekly','monthly']"
          label="Payout Preferences"
          outlined
          dense
          multiple
        />

        <!-- Password -->
        <q-input
          v-model="form.password"
          type="password"
          label="Password"
          outlined
          dense
          required
        />

        <!-- Confirm Password -->
        <q-input
          v-model="form.password_confirmation"
          type="password"
          label="Confirm Password"
          outlined
          dense
          required
        />

        <!-- Register Button -->
        <q-btn type="submit" color="primary" label="Register" class="full-width" />

      </q-form>

      <q-card-actions align="center">
        <q-btn
          flat
          label="Already have an account? Login"
          @click="$router.push('/login')"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  business_name: '',
  logo: null,
  bank_account_name: '',
  bank_account_number: '',
  bank_ifsc_swift: '',
  payout_preferences: [],
  password: '',
  password_confirmation: ''
})

// File change handler
const onFileChange = (e) => {
  form.value.logo = e.target.files[0]
}

// Placeholder submit
const handleRegister = () => {
  console.log('Form submitted:', form.value)
  // 🔜 Replace with axios when API is ready
  // await axios.post('/api/register', form.value)
}
</script>
