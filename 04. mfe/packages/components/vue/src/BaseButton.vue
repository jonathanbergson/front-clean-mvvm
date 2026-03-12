<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
}>();
</script>

<template>
  <button
    :type="type ?? 'button'"
    class="base-button"
    :class="[`base-button--${variant ?? 'primary'}`]"
  >
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s, color 0.15s;
}
.base-button--primary {
  background-color: #3b82f6;
  color: white;
}
.base-button--primary:hover {
  background-color: #2563eb;
}
.base-button--secondary {
  background-color: #e5e7eb;
  color: #374151;
}
.base-button--secondary:hover {
  background-color: #d1d5db;
}
</style>
