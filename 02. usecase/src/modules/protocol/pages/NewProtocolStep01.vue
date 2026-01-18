<script setup lang="ts">
import { useNewProtocolPresenter } from '@/modules/protocol/composables/useNewProtocolStep01.presenter'

const { loading: isLoading, formErrors, formValues, create: handleSubmit } = useNewProtocolPresenter()
</script>

<template>
  <div>
    <h1>Create Protocol:</h1>
    <form @submit.prevent="handleSubmit">
      <p><input type="text" :disabled="isLoading" placeholder="name" name="name" v-model="formValues.name" /></p>
      <p><input type="text" :disabled="isLoading" placeholder="email" name="email" v-model="formValues.email" /></p>
      <p><button type="submit" :disabled="isLoading">{{isLoading ? 'loading...' : 'create'}}</button></p>
    </form>

    <div v-if="isLoading">Carregando...</div>
    <div v-else-if="formErrors">{{ formErrors }}</div>
  </div>
</template>
