import type { IProtocolRepository } from '@/infra/repositories/IProtocolRepository'
import type { CreateProtocolDTO } from '@/application/dtos/CreateProtocolDTO'
import type { IProtocolEntity } from '@/domain/entities/IProtocolEntity'

export class CreateProtocolUseCase {
  constructor(private protocolRepository: IProtocolRepository) {}

  async execute(input: CreateProtocolDTO): Promise<IProtocolEntity> {
    if (!input.name) throw new Error('Nome obrigatório')
    if (!input.email) throw new Error('Email obrigatório')

    return this.protocolRepository.create(input)
  }
}
