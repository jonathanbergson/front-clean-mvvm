<script lang="ts" setup>
import { CreateProtocolUseCase } from "@/domain/usecases/CreateProtocol.usecase";
import { SearchPersonUseCase } from "@/domain/usecases/SearchPerson.usecase";
import { FakeHttpClient } from "@/infra/http/FakeHttpClient";
import { FetchHttpClient } from "@/infra/http/FetchHttpClient";
import { FakePersonFindOutput, PersonGateway } from "@/infra/gateway/Person.gateway";
import { MockProtocolCreateOutput, ProtocolGateway } from "@/infra/gateway/Protocol.gateway";
import { useDependencyInjectionProvider } from "./useDependencyInjectionContext";

const httpClient = new FetchHttpClient();

const personHttpClient = new FakeHttpClient(FakePersonFindOutput);
const personGateway = new PersonGateway(personHttpClient);
const searchPersonUseCase = new SearchPersonUseCase(personGateway);

const protocolHttpClient = new FakeHttpClient(MockProtocolCreateOutput);
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
