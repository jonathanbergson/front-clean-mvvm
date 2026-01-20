import { ref } from "vue";
import { FieldPersonModel, type Person } from "@/domain/models/FieldPerson.model";
import { useDependencyInjectionInject } from "@/infra/DependencyInjectionContext";

export function useFieldPersonViewModel(options?: {
  onSearch?: () => void;
  onSubmit?: (person: Person | null) => void;
}) {
  const di = useDependencyInjectionInject();
  const fieldPerson = ref(new FieldPersonModel());

  fieldPerson.value.register("search", () => {
    options?.onSearch?.();
  });

  fieldPerson.value.register("submit", async (input) => {
    const person = await di?.searchPersonUseCase.execute(input);
    fieldPerson.value.setPerson(person);
    options?.onSubmit?.(person ?? null);
  });

  return { fieldPerson };
}
