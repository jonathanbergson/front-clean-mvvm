<script lang="ts" setup>
import { useAttrs } from "vue";

const attrs = useAttrs();
</script>

<template>
  <b-button v-bind="attrs">
    <slot>label</slot>
  </b-button>
</template>
