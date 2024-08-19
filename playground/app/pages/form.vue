<template>
  <n-form
    ref="formRef"
    :rules="rules"
    :model="model"
    @submit.prevent="() => onSubmit(handleSubmit)"
  >
    <n-form-item
      label="Email"
      path="email"
    >
      <n-input v-model:value="model.email" />
    </n-form-item>

    <n-form-item
      path="password"
      label="Password"
    >
      <n-input
        v-model:value="model.password"
        type="password"
      />
    </n-form-item>

    <n-button
      attr-type="submit"
      :loading="pending"
      :disabled="pending || !edited"
    >
      Login
    </n-button>

    <n-button @click="reset">
      Cancel
    </n-button>
  </n-form>
</template>

<script setup lang="ts">
import { ref, useNaiveForm } from '#imports'

const model = ref({
  email: 'admin@example.com',
  password: '1234',
})

// Pass the form `model`, this will take a snapshot of the initial value and compare it to its reactive value.
// The `reset` function will reset the `model` to its initial value or the value after successful submission.
// The `edited` state indicates changes relative to the initial value.
// `updateResetValue` will update the internal default value to the current model value

const {
  formRef,
  rules,
  pending,
  apiErrors,
  onSubmit,
  edited,
  reset,
} = useNaiveForm(model)

// ApiErrors are reactive Record<string, boolean>.
// It should be set on `handleSubmit` and checked on `rules` validators.

// First `onSubmit` will run form validation for client-side errors,
// Then calls `handleSubmit` to perform fetch request.
// Finally will re-run validation for server-side errors (ApiErrors).
// `pending` state is set during this process.

apiErrors.value = { wrongCredentials: false }

rules.value = {
  email: [
    {
      required: true,
    },
    {
      message: 'Wrong credentials',
      validator: () => !apiErrors.value.wrongCredentials,
    },
  ],
  password: [
    {
      required: true,
    },
  ],
}

async function handleSubmit() {
  apiErrors.value.wrongCredentials = true
}
</script>
