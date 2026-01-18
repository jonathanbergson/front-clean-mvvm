<script setup lang="ts">
import { DependencyInjectionContext } from "@/infra/DependencyInjectionContext";
import FormProtocolView from "@/views/FormProtocol.view.vue";
</script>

<template>
  <DependencyInjectionContext>
    <FormProtocolView />
  </DependencyInjectionContext>
</template>
