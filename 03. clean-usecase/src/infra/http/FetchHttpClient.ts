import type { IHttpClientAdapter, HttpRequest } from "./IHttpClientAdapter";

export class FetchHttpClient implements IHttpClientAdapter {
  constructor() {}

  async request<Input, Output>(config: HttpRequest<Input>): Promise<Output> {
    const response = await fetch(config.url, {
      method: config.method,
      headers: { "Content-Type": "application/json" },
      body: config.body ? JSON.stringify(config.body) : undefined,
    });
    const output = response.json();
    return output;
  }
}
