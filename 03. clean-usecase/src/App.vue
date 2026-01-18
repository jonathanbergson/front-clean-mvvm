<script setup lang="ts">
import DependencyInjectionContext from '@/infra/DependencyInjectionContext/DependencyInjectionContext.vue';
import FormPersonView from '@/views/FormPerson.view.vue';
</script>

<template>
  <DependencyInjectionContext>
    <FormPersonView />
  </DependencyInjectionContext>
</template>
