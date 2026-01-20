import { inject, provide, type InjectionKey } from "vue";
import { CreateProtocolUseCase } from "@/domain/usecases/CreateProtocol.usecase";
import { SearchPersonUseCase } from "@/domain/usecases/SearchPerson.usecase";
import type { ProtocolGateway } from "@/infra/gateway/Protocol.gateway";
import { PersonGateway } from "@/infra/gateway/Person.gateway";
import type { FetchHttpClient } from "@/infra/http/FetchHttpClient";

type Context = {
  // Infra
  httpClient: FetchHttpClient;

  // Gateway
  personGateway: PersonGateway;
  protocolGateway: ProtocolGateway;

  // UseCase
  createProtocolUseCase: CreateProtocolUseCase;
  searchPersonUseCase: SearchPersonUseCase;
};

const CONTEXT_KEY: InjectionKey<Context> = Symbol("DependencyInjectionContext");

export function useDependencyInjectionProvider(context: Context) {
  provide(CONTEXT_KEY, context);
}

export function useDependencyInjectionInject() {
  return inject(CONTEXT_KEY);
}
