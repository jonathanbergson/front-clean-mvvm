<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <RouterLink to="/"> Todo </RouterLink>
    <RouterLink to="/new-protocol/introduction"> Novo Protocolo </RouterLink>
    <RouterLink to="/send-email"> Enviar e-mail </RouterLink>
  </header>

  <section class="container">
    <div class="content">
      <RouterView />
    </div>
  </section>
</template>

<style>
.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
</style>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  gap: 1rem;
}

.container {
  max-width: 400px;
  margin: 0 auto;
}

.content {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
