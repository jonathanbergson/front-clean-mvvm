import type { CreateProtocolDTO } from "@/application/dtos/CreateProtocolDTO";
import type { IProtocolEntity } from "@/domain/entities/IProtocolEntity";

export interface IProtocolRepository {
  create(payload: CreateProtocolDTO): Promise<IProtocolEntity>
}
