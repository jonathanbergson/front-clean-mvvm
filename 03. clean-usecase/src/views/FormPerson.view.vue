<script lang="ts" setup>
import { ref } from 'vue';
import { useDependencyInjectionInject } from '@/infra/DependencyInjectionContext/useDependencyInjectionContext';
import { FormPersonModel } from '@/domain/FormPerson.model';
import FormButtons from '@/components/FormButtons.vue';
import FormField from '@/components/FormField.vue';

const di = useDependencyInjectionInject()

const formPerson = ref(new FormPersonModel())
formPerson.value.register('confirmed', async (input) => {
  formPerson.value.isLoading = true
  await di?.createPersonUseCase.execute({ ...input, lero: '123' })
  formPerson.value.isLoading = false
})
</script>

<template>
  <div class="container">
    <form @submit.prevent>
      <fieldset>
        <legend>Form Person:</legend>
        <FormField v-model="formPerson.values.name" :errors="formPerson.errors.name" :disabled="formPerson.isLoading" placeholder="name" />
        <FormField v-model="formPerson.values.document" :errors="formPerson.errors.document" :disabled="formPerson.isLoading" placeholder="document" />
        <FormButtons @confirm="formPerson.confirm()" :disabled="formPerson.isLoading" />
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
