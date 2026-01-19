<script lang="ts" setup>
import { ref } from "vue";
import ButtonBase from "@/components/ButtonBase.vue";
import InputBase from "@/components/InputBase.vue";
import { FormProtocolModel } from "@/domain/FormProtocol.model";
import { useDependencyInjectionInject } from "@/infra/DependencyInjectionContext";
import FieldPersonView from "./FieldPerson.view.vue";

const di = useDependencyInjectionInject();

const formProtocol = ref(new FormProtocolModel());
formProtocol.value.register("submit", async (input) => {
  di?.createProtocolUseCase.execute(input);
});
</script>

<template>
  <div class="container">
    <form @submit.prevent>
      <fieldset>
        <legend>Create protocol:</legend>
        <InputBase
          v-model="formProtocol.values.name"
          :errors="formProtocol.errors.name"
          :disabled="formProtocol.isLoading"
          placeholder="name"
        />
        <InputBase
          v-model="formProtocol.values.document"
          :errors="formProtocol.errors.document"
          :disabled="formProtocol.isLoading"
          placeholder="document"
        />

        <hr />
        <p>Presenter: {{ formProtocol.values.presenter }}</p>
        <FieldPersonView
          v-model="formProtocol.values.presenter"
          :errors="formProtocol.errors.presenter"
          type="Presenter"
        />

        <hr />
        <p>Financial Manager: {{ formProtocol.values.financialManager }}</p>
        <FieldPersonView
          v-model="formProtocol.values.financialManager"
          :errors="formProtocol.errors.financialManager"
          type="Financial Manager"
        />

        <hr />
        <ButtonBase
          @click="formProtocol.confirm()"
          :disabled="formProtocol.isLoading"
          type="is-info"
        >
          Criar protocolo
        </ButtonBase>
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
