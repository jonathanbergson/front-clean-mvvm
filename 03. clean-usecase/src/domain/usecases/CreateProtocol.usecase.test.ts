import { describe, it, beforeEach, afterEach, expect, vi } from "vitest";
import { CreateProtocolUseCase } from "./CreateProtocol.usecase";
import {
  ProtocolGateway,
  ProtocolCreateInput,
  ProtocolCreateOutput,
} from "@/infra/gateway/Protocol.gateway";
import { IHttpClientAdapter } from "@/infra/http/IHttpClientAdapter";

describe("CreateProtocolUseCase", () => {
  const httpClientMock: IHttpClientAdapter = { request: vi.fn() };
  let protocolGatewayMock: ProtocolGateway;
  let createProtocolUseCase: CreateProtocolUseCase;

  const input: ProtocolCreateInput = {
    name: "John Doe",
    email: "john@example.com",
    document: "123456789",
    financialManager: "Jane Doe",
  };
  const output: ProtocolCreateOutput = {
    id: "123",
    name: "John Doe",
    email: "john@example.com",
    document: "123456789",
    financialManager: "Jane Doe",
  };

  beforeEach(() => {
    protocolGatewayMock = new ProtocolGateway(httpClientMock);
    protocolGatewayMock.create = vi.fn();
    createProtocolUseCase = new CreateProtocolUseCase(protocolGatewayMock);
    window.alert = vi.fn(); // Mock direto para o alert
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("deve chamar o método create do ProtocolGateway com o input correto", async () => {
    vi.mocked(protocolGatewayMock.create).mockResolvedValue(output);
    const result = await createProtocolUseCase.execute(input);
    expect(protocolGatewayMock.create).toHaveBeenCalledOnce();
    expect(protocolGatewayMock.create).toHaveBeenCalledWith(input);
    expect(result).toEqual(output);
  });

  it("deve lidar com erros lançados pelo ProtocolGateway", async () => {
    const error = new Error("Erro ao criar protocolo");
    vi.mocked(protocolGatewayMock.create).mockRejectedValue(error);
    const result = await createProtocolUseCase.execute(input);
    expect(protocolGatewayMock.create).toHaveBeenCalledOnce();
    expect(protocolGatewayMock.create).toHaveBeenCalledWith(input);
    expect(result).toBeUndefined();
  });
});
