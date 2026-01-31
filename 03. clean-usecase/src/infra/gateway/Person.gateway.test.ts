import { describe, expect, it, vi } from "vitest";
import { PersonGateway } from "./Person.gateway";
import { HttpMethods } from "../http/IHttpClientAdapter";

const httpClient = {
  request: vi.fn(),
};

describe("PersonGateway", () => {
  it("deve fazer uma request com os parâmetros coretos", () => {
    const input = { document: "12345678901" };
    const personGateway = new PersonGateway(httpClient);
    personGateway.find(input);
    expect(httpClient.request).toHaveBeenCalledOnce();
    expect(httpClient.request).toHaveBeenCalledWith({
      method: HttpMethods.GET,
      url: "http://localhost:3000/person",
      body: input,
    });
  });
});
