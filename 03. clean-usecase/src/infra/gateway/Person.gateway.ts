import { type IHttpClientAdapter, HttpMethods } from "@/infra/http/IHttpClientAdapter";

export default interface IPersonGateway {
  create(input: PersonCreateInput): Promise<PersonCreateOutput>;
}

export class PersonGateway implements IPersonGateway {
  constructor(private readonly httpClient: IHttpClientAdapter) {}

  async create(input: PersonCreateInput): Promise<PersonCreateOutput> {
    const output = await this.httpClient.request<PersonCreateInput, PersonCreateOutput>({
      method: HttpMethods.POST,
      url: "http://localhost:3000/person",
      body: input,
    });
    return output;
  }
}

export class FakePersonGateway implements IPersonGateway {
  async create(): Promise<PersonCreateOutput> {
    return FakeCreateOutput;
  }
}

export const FakeCreateOutput: PersonCreateOutput = {
  id: "72632748-83a6-4edb-b9c7-b1f0223530e6",
  name: "Jonathan Bergson",
  email: "contato@bergson.me",
  document: "123qweasd",
};

export type PersonCreateInput = {
  name: string;
  email: string;
  document: string;
  password: string;
  lero: string;
};

export type PersonCreateOutput = {
  id: string;
  name: string;
  email: string;
  document: string;
};
