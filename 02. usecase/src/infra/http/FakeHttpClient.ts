import type { IHttpClientAdapter, HttpRequest } from "./IHttpClientAdapter";

export class FakeHttpClient<FakeResponse> implements IHttpClientAdapter {
  constructor(private response: FakeResponse) {}

  request<Body, Response>(config: HttpRequest<Body>): Promise<Response> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.response as unknown as Response)
      }, 2000);
    })
  }
}
