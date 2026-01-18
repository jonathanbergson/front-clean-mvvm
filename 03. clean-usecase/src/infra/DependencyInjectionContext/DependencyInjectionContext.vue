<script lang="ts" setup>
import { FakeCreateOutput, ProtocolGateway } from "@/infra/gateway/Protocol.gateway";
import { FetchHttpClient } from "@/infra/http/FetchHttpClient";
import { useDependencyInjectionProvider } from "./useDependencyInjectionContext";
import { CreateProtocolUseCase } from "@/domain/CreateProtocol.usecase";
import { FakeHttpClient } from "../http/FakeHttpClient";

const httpClient = new FakeHttpClient(FakeCreateOutput);
// const httpClient = new FetchHttpClient()
const protocolGateway = new ProtocolGateway(httpClient);
const createProtocolUseCase = new CreateProtocolUseCase(protocolGateway);

useDependencyInjectionProvider({
  // Infra
  httpClient,

  // Gateway
  protocolGateway,

  // UseCase
  createProtocolUseCase,
});
</script>

<template>
  <slot></slot>
</template>
