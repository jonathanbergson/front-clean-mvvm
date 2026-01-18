import type { CreateProtocolDTO } from "@/application/dtos/CreateProtocolDTO";
import type { IProtocolEntity } from "@/domain/entities/IProtocolEntity";
import type { IProtocolRepository } from "@/infra/repositories/IProtocolRepository"
import { HttpMethod, type IHttpClientAdapter } from "../http/IHttpClientAdapter";

export class ProtocolRepository implements IProtocolRepository {
  constructor(private httpClient: IHttpClientAdapter) {}

  create(payload: CreateProtocolDTO): Promise<IProtocolEntity> {
    return this.httpClient.request<CreateProtocolDTO, IProtocolEntity>({
      url: '/api/v1/protocols',
      method: HttpMethod.POST,
      body: {
        name: payload.name,
        email: payload.email,
      }
    })
  }
}
