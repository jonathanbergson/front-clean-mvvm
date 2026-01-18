<script lang="ts" setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
const model = defineModel({ default: '' })
const { errors = [] } = defineProps<{ errors: string[] }>()
</script>

<template>
  <input v-model="model" v-bind="attrs" />
  <div v-if="errors.length" class="error">
    {{ errors[0] }}
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>
