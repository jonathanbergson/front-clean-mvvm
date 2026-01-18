<script setup>
import { useNewProtocolViewModel } from '@/modules/protocol/viewModels/useNewProtocol.viewModel.js'

const { formValues, isLoading, createProtocol } = useNewProtocolViewModel()
</script>

<template>
  <div>
    <h2>Novo Protocolo: Abertura</h2>
    <form @submit.prevent="createProtocol">
      <div class="field">
        <label for="state">Estado:</label>
        <input
          id="state"
          v-model="formValues.state"
          :disabled="isLoading"
          type="text"
          required
        >
      </div>
      <div class="field">
        <label for="city">Cidade:</label>
        <input
          id="city"
          v-model="formValues.city"
          :disabled="isLoading"
          type="text"
          required
        >
      </div>
      <div class="field">
        <label for="protocolType">Tipo de protocolo:</label>
        <input
          id="protocolType"
          v-model="formValues.protocolType"
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
