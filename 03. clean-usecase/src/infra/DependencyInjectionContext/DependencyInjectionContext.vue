<script lang="ts" setup>
import { FakeCreateOutput, PersonGateway } from '@/infra/gateway/Person.gateway';
import { FetchHttpClient } from '@/infra/http/FetchHttpClient';
import { useDependencyInjectionProvider } from './useDependencyInjectionContext';
import { CreatePersonUseCase } from '@/domain/CreatePerson.usecase';
import { FakeHttpClient } from '../http/FakeHttpClient';

const httpClient = new FakeHttpClient(FakeCreateOutput)
// const httpClient = new FetchHttpClient()
const personGateway = new PersonGateway(httpClient)
const createPersonUseCase = new CreatePersonUseCase(personGateway)

useDependencyInjectionProvider({
  // Infra
  httpClient,

  // Gateway
  personGateway,

  // UseCase
  createPersonUseCase,
})
</script>

<template>
  <slot></slot>
</template>
