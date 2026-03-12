<script setup lang="ts">
import { ref } from 'vue';
import { BaseInput, BaseButton } from '@mfe/components-vue';

const name = ref('');
const email = ref('');
const message = ref('');
const submitted = ref(false);

function onSubmit() {
  submitted.value = true;
  console.log({ name: name.value, email: email.value, message: message.value });
}
</script>

<template>
  <div class="simple-form">
    <h1 class="simple-form__title">Formulário simples</h1>
    <p class="simple-form__subtitle">Micro frontend Vue.js</p>

    <form v-if="!submitted" class="simple-form__form" @submit.prevent="onSubmit">
      <BaseInput v-model="name" label="Nome" placeholder="Seu nome" />
      <BaseInput v-model="email" label="E-mail" type="email" placeholder="seu@email.com" />
      <BaseInput v-model="message" label="Mensagem" placeholder="Sua mensagem..." />

      <div class="simple-form__actions">
        <BaseButton type="submit">Enviar</BaseButton>
      </div>
    </form>

    <div v-else class="simple-form__success">
      <p>Formulário enviado com sucesso!</p>
      <p><strong>Nome:</strong> {{ name }}</p>
      <p><strong>E-mail:</strong> {{ email }}</p>
      <p><strong>Mensagem:</strong> {{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.simple-form {
  max-width: 24rem;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}
.simple-form__title {
  margin: 0 0 0.25rem;
  font-size: 1.5rem;
  color: #111827;
}
.simple-form__subtitle {
  margin: 0 0 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}
.simple-form__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.simple-form__actions {
  margin-top: 0.5rem;
}
.simple-form__success {
  padding: 1rem;
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  border-radius: 0.5rem;
  color: #065f46;
}
.simple-form__success p {
  margin: 0.25rem 0;
}
</style>
