import { FormInst, FormRules } from "naive-ui";
import { ref, Ref } from "#imports";

export default function useNaiveForm() {
  const formRef: Ref<FormInst | null> = ref<FormInst | null>(null);
  const pending: Ref<boolean> = ref(false);
  const rules: Ref<FormRules> = ref<FormRules>({});
  const apiErrors: Ref<Record<string, boolean>> = ref<Record<string, boolean>>(
    {}
  );

  function resetApiErrors() {
    Object.keys(apiErrors.value).forEach(
      (key) => (apiErrors.value[key] = false)
    );
  }

  /**
   * Called on Naive form submit, validates form inputs, if no errors found, calls callback function
   * @param callback should handle data fetching and on error sets apiErrors
   * @note apiErrors should be checked on validators
   */
  function onSubmit(callback: () => Promise<void>): void {
    formRef.value?.validate((errors) => {
      if (!errors) {
        resetApiErrors();
        pending.value = true;

        callback().finally(() => {
          pending.value = false;
          formRef.value?.validate();
          resetApiErrors();
        });
      }
    });
  }

  return { formRef, pending, rules, apiErrors, onSubmit };
}
