<template>
    <n-form ref="formRef" :rules="rules" :model="model" @submit.prevent="() => onSubmit(handleSubmit)">
        <n-form-item label="Email" path="email" :show-require-mark="false">
            <n-input v-model:value="model.email"></n-input>
        </n-form-item>

        <n-form-item path="password" label="Password" :show-require-mark="false">
            <n-input v-model:value="model.password" type="password" show-password-on="mousedown"></n-input>
        </n-form-item>

        <div>
            <n-button attr-type="submit" :loading="pending" :disabled="!edited" type="primary">Login</n-button>
            <n-button attr-type="button" :disabled="pending" @click="reset">Reset</n-button>

        </div>
    </n-form>
</template>


<script setup lang="ts">
import { useNaiveForm, ref } from "#imports"

const model = ref({
    email: "bcem.sd@gls.cp",
    password: "qsd",
})

const { formRef, rules, pending, apiErrors, edited, reset, onSubmit } = useNaiveForm(model)

apiErrors.value = {
    wrongCredentials: false,
    invalidProvider: false,
    accountNotVerified: false,
    accountSuspended: false
}

rules.value = {
    email: [
        {
            required: true,
            message: "Please input your email",
            trigger: "blur",
        },
        {
            message: "Wrong credentials",
            validator: () => !apiErrors.value.wrongCredentials
        },
        {
            message: "Your account is not verified",
            validator: () => !apiErrors.value.accountNotVerified
        },
        {
            message: "Your account is suspended",
            validator: () => !apiErrors.value.accountSuspended
        }
    ],
    password: [
        {
            required: true,
            message: "Please input your password",
            trigger: "blur",
        },
    ],
}

async function handleSubmit() {
}
</script>