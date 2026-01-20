import {
  ProtocolCreateInput,
  ProtocolCreateOutput,
  ProtocolGateway,
} from "@/infra/gateway/Protocol.gateway";
import { IUseCase } from "@/infra/IUseCase";

export class CreateProtocolUseCase implements IUseCase<ProtocolCreateInput, ProtocolCreateOutput> {
  constructor(private readonly protocolGateway: ProtocolGateway) {}

  async execute(input: ProtocolCreateInput) {
    try {
      const response = await this.protocolGateway.create(input);
      alert(`SUCESSO: ${JSON.stringify(response)}`);
      return response;
    } catch (error) {
      alert(`ERROR: ${error}`);
    }
  }
}
