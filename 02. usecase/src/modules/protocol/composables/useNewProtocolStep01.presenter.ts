import { CreateProtocolUseCase } from "@/application/usecases/CreateProtocol.usecase";
import { FakeHttpClient } from "@/infra/http/FakeHttpClient";
import { ProtocolRepository } from "@/infra/repositories/Protocol.repository";
import { reactive, ref } from "vue";
import { generateProtocolMock } from "./protocol.mock";

export function useNewProtocolPresenter() {
  const isLoading = ref(false)

  const formErrors = ref<string | null>(null)
  const formValues = reactive({
    name: '',
    email: ''
  })

  const create = async () => {
    isLoading.value = true

    try {
      const mock = generateProtocolMock({...formValues})
      const httpClient = new FakeHttpClient(mock)
      const protocolRepository = new ProtocolRepository(httpClient)
      const createProtocolUseCase = new CreateProtocolUseCase(protocolRepository)
      const output = await createProtocolUseCase.execute({...formValues})

      return output
    } catch (e) {
      if (e instanceof Error) {
        formErrors.value = e.message
      } else {
        formErrors.value = String(e)
      }
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, formErrors, formValues, create }
}
