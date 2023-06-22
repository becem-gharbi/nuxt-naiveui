import { FormInst, FormRules } from "naive-ui";
import { ref } from "#imports";
import type { Ref } from "vue";

export default function useNaiveForm(model: Ref<any> = ref({})) {
  const formRef: Ref<FormInst | null> = ref<FormInst | null>(null);
  const pending: Ref<boolean> = ref(false);
  const rules: Ref<FormRules> = ref<FormRules>({});
  const defaultModel = JSON.parse(JSON.stringify(model.value));
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
    formRef.value
      ?.validate((errors: any) => {
        if (!errors) {
          resetApiErrors();
          pending.value = true;

          callback().finally(() => {
            pending.value = false;
            formRef.value?.validate();
            resetApiErrors();
          });
        }
      })
      .catch(() => {});
  }

  function reset() {
    model.value = JSON.parse(JSON.stringify(defaultModel));
  }

  return { formRef, pending, rules, apiErrors, reset, onSubmit };
}
