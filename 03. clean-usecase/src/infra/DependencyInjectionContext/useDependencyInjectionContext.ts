import { inject, provide, type InjectionKey } from "vue";
import type { PersonGateway } from "@/infra/gateway/Person.gateway";
import type { FetchHttpClient } from "@/infra/http/FetchHttpClient";
import { CreatePersonUseCase } from "@/domain/CreatePerson.usecase";

type Context = {
  // Infra
  httpClient: FetchHttpClient;

  // Gateway
  personGateway: PersonGateway;

  // UseCase
  createPersonUseCase: CreatePersonUseCase;
};

const CONTEXT_KEY: InjectionKey<Context> = Symbol("DependencyInjectionContext");

export function useDependencyInjectionProvider(context: Context) {
  provide(CONTEXT_KEY, context);
}

export function useDependencyInjectionInject() {
  return inject(CONTEXT_KEY);
}
