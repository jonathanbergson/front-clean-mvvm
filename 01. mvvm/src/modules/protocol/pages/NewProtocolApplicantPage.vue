<script setup>
import {
  useNewProtocolApplicantViewModel
} from '@/modules/protocol/viewModels/useNewProtocolApplicant.viewModel.js'

const { formValues, isLoading, addApplicant } = useNewProtocolApplicantViewModel()
</script>

<template>
  <div>
    <h2>Novo Protocolo: Aplicante</h2>
    <form @submit.prevent="addApplicant">
      <div class="field">
        <label for="name">Nome completo:</label>
        <input
          id="name"
          v-model="formValues.name"
          :disabled="isLoading"
          type="text"
          required
        >
      </div>
      <div class="field">
        <label for="email">E-mail:</label>
        <input
          id="email"
          v-model="formValues.email"
          :disabled="isLoading"
          type="text"
          required
        >
      </div>
      <div class="field">
        <label for="document">Documento de identidade:</label>
        <input
          id="document"
          v-model="formValues.document"
          :disabled="isLoading"
          type="text"
          required
        >
      </div>
      <button
        :disabled="isLoading"
        type="submit"
      >
        {{ isLoading ? '...' : 'Enviar' }}
      </button>
    </form>
  </div>
</template>
