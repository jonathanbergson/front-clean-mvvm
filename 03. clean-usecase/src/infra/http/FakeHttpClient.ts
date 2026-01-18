import type { IHttpClientAdapter } from "./IHttpClientAdapter";

export class FakeHttpClient<FakeResponse> implements IHttpClientAdapter {
  constructor(private response: FakeResponse, private timeout = 1000) { }

  request<_, Output>(): Promise<Output> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.response as unknown as Output)
      }, this.timeout);
    })
  }
}
