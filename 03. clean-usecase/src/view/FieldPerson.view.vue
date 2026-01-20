<script lang="ts" setup>
import { ButtonBase, InputBase } from "@/components";
import { useFieldPersonViewModel } from "./FieldPerson.viewmodel";

const model = defineModel({ default: "" });
const props = defineProps<{ errors: string[]; type: string }>();

const { fieldPerson } = useFieldPersonViewModel({
  onSearch: () => {
    model.value = null;
  },
  onSubmit: (person) => {
    model.value = person?.id ?? null;
  },
});
</script>

<template>
  <div>
    <fieldset>
      <legend>
        Find person: <b>{{ props.type }}</b>
      </legend>
      <InputBase
        v-model="fieldPerson.values.document"
        :errors="fieldPerson.isLoading ? [] : [...fieldPerson.errors.document, ...errors]"
        :disabled="fieldPerson.isLoading"
        placeholder="document"
      />
      <ButtonBase @click="fieldPerson.handleSubmit()" :disabled="fieldPerson.isLoading">
        Buscar pessoa
      </ButtonBase>
    </fieldset>
  </div>
</template>
