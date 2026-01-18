import {
  PersonCreateInput,
  PersonCreateOutput,
  PersonGateway,
} from "@/infra/gateway/Person.gateway";
import { IUseCase } from "@/infra/IUseCase";

export class CreatePersonUseCase implements IUseCase<PersonCreateInput, PersonCreateOutput> {
  constructor(private readonly personGateway: PersonGateway) {}

  async execute(input: PersonCreateInput) {
    try {
      const response = await this.personGateway.create(input);
      alert(`SUCESSO: ${JSON.stringify(response)}`);
      return response;
    } catch (error) {
      alert(`ERROR: ${error}`);
    }
  }
}
