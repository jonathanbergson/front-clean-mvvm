import type { CreateProtocolDTO } from "@/application/dtos/CreateProtocolDTO"
import type { IProtocolEntity } from "@/domain/entities/IProtocolEntity"

export const generateProtocolMock(payload: CreateProtocolDTO): IProtocolEntity => ({
  id: 'id',
  name: payload.name,
  email: payload.email,
})
