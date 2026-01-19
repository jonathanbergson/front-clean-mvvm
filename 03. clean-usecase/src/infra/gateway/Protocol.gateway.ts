import { type IHttpClientAdapter, HttpMethods } from "@/infra/http/IHttpClientAdapter";

export default interface IProtocolGateway {
  create(input: ProtocolCreateInput): Promise<ProtocolCreateOutput>;
}

export class ProtocolGateway implements IProtocolGateway {
  constructor(private readonly httpClient: IHttpClientAdapter) {}

  async create(input: ProtocolCreateInput): Promise<ProtocolCreateOutput> {
    const output = await this.httpClient.request<ProtocolCreateInput, ProtocolCreateOutput>({
      method: HttpMethods.POST,
      url: "http://localhost:3000/protocol",
      body: input,
    });
    return output;
  }
}

export type ProtocolCreateInput = {
  name: string;
  email: string;
  document: string;
  financialManager: string;
};

export type ProtocolCreateOutput = {
  id: string;
  name: string;
  email: string;
  document: string;
  financialManager: string;
};

export class FakeProtocolGateway implements IProtocolGateway {
  async create(): Promise<ProtocolCreateOutput> {
    return FakeCreateOutput;
  }
}

export const FakeCreateOutput: ProtocolCreateOutput = {
  id: "72632748-83a6-4edb-b9c7-b1f0223530e6",
  name: "Jonathan Bergson",
  email: "contato@bergson.me",
  document: "123qweasd",
  financialManager: "72632748-83a6-4edb-b9c7-b1f0223530e6",
};
