export enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
}

export type HttpRequest<Body> = {
  method: HttpMethod | string,
  url: string,
  body: Body
}

export interface IHttpClientAdapter {
  request<Body, Response>(config: HttpRequest<Body>): Promise<Response>
}
