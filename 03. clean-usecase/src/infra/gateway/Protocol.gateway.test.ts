import { describe, expect, it, vi } from "vitest";
import { ProtocolGateway } from "./Protocol.gateway";
import { HttpMethods } from "../http/IHttpClientAdapter";

const httpClient = {
  request: vi.fn(),
};

describe("ProtocolGateway", () => {
  it("deve fazer uma request com os parâmetros coretos", () => {
    const input = {
      name: "Full Name",
      email: "mail@domain.com",
      document: "12345678901",
      financialManager: "ouih-asfc-lakj",
    };
    const protocolGateway = new ProtocolGateway(httpClient);
    protocolGateway.create(input);
    expect(httpClient.request).toHaveBeenCalledOnce();
    expect(httpClient.request).toHaveBeenCalledWith({
      method: HttpMethods.POST,
      url: "http://localhost:3000/protocol",
      body: input,
    });
  });
});
