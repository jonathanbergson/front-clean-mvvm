<script lang="ts" setup>
import { useAttrs } from "vue";

const attrs = useAttrs();
const emit = defineEmits(["confirm"]);
</script>

<template>
  <div>
    <button @click="emit('confirm')" v-bind="attrs">submit</button>
  </div>
</template>
