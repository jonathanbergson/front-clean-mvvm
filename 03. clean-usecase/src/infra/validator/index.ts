import { computed, ref, watch } from "vue";

type ValidationRule<T> = {
  validationFn: (value: T) => boolean;
  errorMessage?: string;
};

export function useValidator<T>(initialValue: T, validationRules: ValidationRule<T>[]) {
  const value = ref(initialValue);
  const touched = ref(false);

  watch(value, () => {
    touched.value = true;
  });

  const errors = computed(() => {
    if (!touched.value || validationRules.length === 0) return [];
    return validationRules
      .filter((rule) => !rule.validationFn(value.value))
      .map((rule) => rule.errorMessage || "invalid");
  });

  const valid = computed(() => touched.value && errors.value.length === 0);

  return {
    // state
    value,
    touched,
    valid,
    errors,
  };
}
