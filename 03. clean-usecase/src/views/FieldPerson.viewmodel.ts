import { ref } from "vue";
import { FieldPersonModel, type Person } from "@/domain/FieldPerson.model";
import { useDependencyInjectionInject } from "@/infra/DependencyInjectionContext";

export function useFieldPersonViewModel(opts?: {
  onSearch?: () => void;
  onSubmit?: (person: Person | null) => void;
}) {
  const di = useDependencyInjectionInject();
  const fieldPerson = ref(new FieldPersonModel());

  fieldPerson.value.register("search", () => {
    opts?.onSearch?.();
  });

  fieldPerson.value.register("submit", async (input) => {
    const person = await di?.searchPersonUseCase.execute(input);
    fieldPerson.value.setPerson(person);
    opts?.onSubmit?.(person ?? null);
  });

  return { fieldPerson };
}
