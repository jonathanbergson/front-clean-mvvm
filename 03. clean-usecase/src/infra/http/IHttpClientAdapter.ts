export interface IHttpClientAdapter {
  request<Input, Output>(config: HttpRequest<Input>): Promise<Output>;
}

export enum HttpMethods {
  POST = "POST",
  GET = "GET",
}

export type HttpRequest<Body> = {
  method: HttpMethods | string;
  url: string;
  body: Body;
};
