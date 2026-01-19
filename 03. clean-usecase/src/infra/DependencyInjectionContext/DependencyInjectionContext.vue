<script lang="ts" setup>
import { FakeCreateOutput, ProtocolGateway } from "@/infra/gateway/Protocol.gateway";
import { FetchHttpClient } from "@/infra/http/FetchHttpClient";
import { useDependencyInjectionProvider } from "./useDependencyInjectionContext";
import { CreateProtocolUseCase } from "@/domain/CreateProtocol.usecase";
import { FakeHttpClient } from "../http/FakeHttpClient";
import { FakePersonFindOutput, PersonGateway } from "../gateway/Person.gateway";
import { SearchPersonUseCase } from "@/domain/SearchPerson.usecase";

const httpClient = new FetchHttpClient();

const personHttpClient = new FakeHttpClient(FakePersonFindOutput);
const personGateway = new PersonGateway(personHttpClient);
const searchPersonUseCase = new SearchPersonUseCase(personGateway);

const protocolHttpClient = new FakeHttpClient(FakeCreateOutput);
const protocolGateway = new ProtocolGateway(protocolHttpClient);
const createProtocolUseCase = new CreateProtocolUseCase(protocolGateway);

useDependencyInjectionProvider({
  // Infra
  httpClient,

  // Gateway
  personGateway,
  protocolGateway,

  // UseCase
  createProtocolUseCase,
  searchPersonUseCase,
});
</script>

<template>
  <slot></slot>
</template>
