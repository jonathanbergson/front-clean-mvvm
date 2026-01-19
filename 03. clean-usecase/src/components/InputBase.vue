<script lang="ts" setup>
import { useAttrs } from "vue";

const attrs = useAttrs();
const model = defineModel({ default: "" });
const { errors = [] } = defineProps<{ errors: string[] }>();
</script>

<template>
  <b-field label="Name" :type="errors.length ? 'is-danger' : null" :message="errors[0]">
    <b-input v-model="model" v-bind="attrs" />
  </b-field>
</template>
