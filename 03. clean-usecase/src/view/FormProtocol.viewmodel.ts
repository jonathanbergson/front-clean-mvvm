import { ref } from "vue";
import { FormProtocolModel } from "@/domain/models/FormProtocol.model";
import { useDependencyInjectionInject } from "@/infra/DependencyInjectionContext";

export function useFormProtocolViewModel() {
  const di = useDependencyInjectionInject();
  const formProtocol = ref(new FormProtocolModel());

  formProtocol.value.register("submit", async (input) => {
    di?.createProtocolUseCase.execute(input);
  });

  return { formProtocol };
}
