<script lang="ts" setup>
import { ref } from "vue";
import FormButtons from "@/components/FormButtons.vue";
import FormField from "@/components/FormField.vue";
import { FormProtocolModel } from "@/domain/FormProtocol.model";
import { useDependencyInjectionInject } from "@/infra/DependencyInjectionContext/useDependencyInjectionContext";

const di = useDependencyInjectionInject();

const formProtocol = ref(new FormProtocolModel());
formProtocol.value.register("confirmed", async (input) => {
  formProtocol.value.isLoading = true;
  await di?.createProtocolUseCase.execute({ ...input, lero: "123" });
  formProtocol.value.isLoading = false;
});
</script>

<template>
  <div class="container">
    <form @submit.prevent>
      <fieldset>
        <legend>Create protocol:</legend>
        <FormField
          v-model="formProtocol.values.name"
          :errors="formProtocol.errors.name"
          :disabled="formProtocol.isLoading"
          placeholder="name"
        />
        <FormField
          v-model="formProtocol.values.document"
          :errors="formProtocol.errors.document"
          :disabled="formProtocol.isLoading"
          placeholder="document"
        />
        <FormButtons @confirm="formProtocol.confirm()" :disabled="formProtocol.isLoading" />
      </fieldset>
    </form>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 320px;
  padding: 24px;
  width: 100%;
}
</style>
