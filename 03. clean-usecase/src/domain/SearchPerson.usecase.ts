import { PersonFindInput, PersonFindOutput, PersonGateway } from "@/infra/gateway/Person.gateway";
import { IUseCase } from "@/infra/IUseCase";

export class SearchPersonUseCase implements IUseCase<PersonFindInput, PersonFindOutput> {
  constructor(private readonly personGateway: PersonGateway) {}

  async execute(input: PersonFindInput) {
    try {
      const response = await this.personGateway.find(input);
      return response;
    } catch (error) {
      alert(`ERROR: ${error}`);
    }
  }
}
