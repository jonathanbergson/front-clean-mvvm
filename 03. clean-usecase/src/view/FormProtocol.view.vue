<script lang="ts" setup>
import { ButtonBase, Container, InputBase } from "@/components";
import { useFormProtocolViewModel } from "@/domain/viewmodels/FormProtocol.viewmodel";
import FieldPersonView from "./FieldPerson.view.vue";

const { formProtocol } = useFormProtocolViewModel();
</script>

<template>
  <Container>
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
          @click="formProtocol.handleSubmit()"
          :disabled="formProtocol.isLoading"
          type="is-info"
        >
          Criar protocolo
        </ButtonBase>
      </fieldset>
    </form>
  </Container>
</template>
