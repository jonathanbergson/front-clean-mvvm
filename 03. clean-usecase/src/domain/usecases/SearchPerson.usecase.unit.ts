import { PersonFindInput, PersonFindOutput, PersonGateway } from "@/infra/gateway/Person.gateway";
import { IHttpClientAdapter } from "@/infra/http/IHttpClientAdapter";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SearchPersonUseCase } from "./SearchPerson.usecase";

describe("SearchPersonUseCase", () => {
  const httpClientMock: IHttpClientAdapter = { request: vi.fn() };
  let personGateway: PersonGateway;
  let searchPersonUseCase: SearchPersonUseCase;

  const input: PersonFindInput = {
    document: "123456789",
  };
  const output: PersonFindOutput = {
    id: "123",
    name: "John Doe",
    email: "john@domain.com",
    document: "123456789",
  };

  beforeEach(() => {
    personGateway = new PersonGateway(httpClientMock);
    personGateway.find = vi.fn();
    searchPersonUseCase = new SearchPersonUseCase(personGateway);
    window.alert = vi.fn(); // Mock direto para o alert
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("deve chamar o método create do PersonGateway com o find correto", async () => {
    vi.mocked(personGateway.find).mockResolvedValue(output);
    const result = await searchPersonUseCase.execute(input);
    expect(personGateway.find).toHaveBeenCalledOnce();
    expect(personGateway.find).toHaveBeenCalledWith(input);
    expect(result).toEqual(output);
  });

  it("deve lidar com erros lançados pelo PersonGateway", async () => {
    const error = new Error("Erro ao buscar pessoa");
    vi.mocked(personGateway.find).mockRejectedValue(error);
    const result = await searchPersonUseCase.execute(input);
    expect(personGateway.find).toHaveBeenCalledOnce();
    expect(personGateway.find).toHaveBeenCalledWith(input);
    expect(result).toBeUndefined();
  });
});
