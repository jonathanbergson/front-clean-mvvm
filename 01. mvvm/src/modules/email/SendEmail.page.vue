<script setup>
import { useSendEmailViewModel } from '@/modules/email/useSendEmail.viewModel.js'

const { formValues, isLoading, sendEmail } = useSendEmailViewModel()
</script>

<template>
  <div>
    <h2>Enviar Email</h2>
    <form @submit.prevent="sendEmail">
      <div class="field">
        <label for="to">Para:</label>
        <input
          id="to"
          v-model="formValues.to"
          :disabled="isLoading"
          type="text"
          required
        >
      </div>
      <div class="field">
        <label for="subject">Assunto:</label>
        <input
          id="subject"
          v-model="formValues.subject"
          :disabled="isLoading"
          type="text"
          required
        >
      </div>
      <div class="field">
        <label for="message">Mensagem:</label>
        <textarea
          id="message"
          v-model="formValues.message"
          :disabled="isLoading"
          required
        />
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
