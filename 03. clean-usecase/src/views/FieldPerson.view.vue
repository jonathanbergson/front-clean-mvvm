<script lang="ts" setup>
import ButtonBase from "@/components/ButtonBase.vue";
import InputBase from "@/components/InputBase.vue";
import { FieldPersonModel } from "@/domain/FieldPerson.model";
import { useDependencyInjectionInject } from "@/infra/DependencyInjectionContext";
import { ref } from "vue";

const model = defineModel({ default: "" });
const props = defineProps<{ errors: string[]; type: string }>();

const di = useDependencyInjectionInject();

const fieldPerson = ref(new FieldPersonModel());
fieldPerson.value.register("search", () => {
  model.value = null;
});
fieldPerson.value.register("submit", async (input) => {
  const person = await di?.searchPersonUseCase.execute(input);
  fieldPerson.value.person = person;
  model.value = person.id;
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
      <ButtonBase @click="fieldPerson.submit()" :disabled="fieldPerson.isLoading">
        Buscar pessoa
      </ButtonBase>
    </fieldset>

    <!-- <div class="card">
    <pre>{{ fieldPerson.person }}</pre>
  </div> -->
  </div>
</template>

<style scoped>
.card {
  border-radius: 8px;
  border: lightgray;
  padding: 24px;
}
</style>
