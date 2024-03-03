<template>
  <NaiveConfig>
    <client-only>
      <n-loading-bar-provider>
        <naive-loading-bar navigation />
      </n-loading-bar-provider>
    </client-only>

    <n-dialog-provider>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </n-dialog-provider>
  </NaiveConfig>
</template>

<style>
.brand {
  display: flex;
  align-items: center;
  gap: 1em;
}

.page-enter-active,
.page-leave-active {
  transition: all 1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 1s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
