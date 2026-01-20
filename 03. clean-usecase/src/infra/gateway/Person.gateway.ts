import { HttpMethods, IHttpClientAdapter } from "@/infra/http/IHttpClientAdapter";

export default interface IPersonGateway {
  find(input: PersonFindInput): Promise<PersonFindOutput>;
}

export class PersonGateway implements IPersonGateway {
  constructor(private readonly httpClient: IHttpClientAdapter) {}

  async find(input: PersonFindInput): Promise<PersonFindOutput> {
    const output = await this.httpClient.request<PersonFindInput, PersonFindOutput>({
      method: HttpMethods.GET,
      url: "http://localhost:3000/person",
      body: input,
    });
    return output;
  }
}

export type PersonFindInput = {
  document: string;
};

export type PersonFindOutput = {
  id: string;
  name: string;
  email: string;
  document: string;
  phone?: string;
};

export const FakePersonFindOutput: PersonFindOutput = {
  id: "72632748-83a6-4edb-b9c7-b1f0223530e6",
  name: "Jonathan Bergson",
  email: "contato@bergson.me",
  document: "110.830.656-02",
  phone: "31998558097",
};
