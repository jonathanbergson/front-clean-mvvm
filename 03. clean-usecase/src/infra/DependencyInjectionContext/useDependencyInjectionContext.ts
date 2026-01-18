import { inject, provide, type InjectionKey } from "vue";
import type { ProtocolGateway } from "@/infra/gateway/Protocol.gateway";
import type { FetchHttpClient } from "@/infra/http/FetchHttpClient";
import { CreateProtocolUseCase } from "@/domain/CreateProtocol.usecase";

type Context = {
  // Infra
  httpClient: FetchHttpClient;

  // Gateway
  protocolGateway: ProtocolGateway;

  // UseCase
  createProtocolUseCase: CreateProtocolUseCase;
};

const CONTEXT_KEY: InjectionKey<Context> = Symbol("DependencyInjectionContext");

export function useDependencyInjectionProvider(context: Context) {
  provide(CONTEXT_KEY, context);
}

export function useDependencyInjectionInject() {
  return inject(CONTEXT_KEY);
}
