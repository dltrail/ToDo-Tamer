<script setup lang="ts">
  interface Props {
    iconName?: string;
    isDisabled?: boolean;
  }
  const props = defineProps<Props>()
</script>

<template>
  <button data-testid="button" class="button" :disabled="isDisabled" role="button">
    <UIcon data-testid="button-icon" v-if="iconName" :name="iconName" class="button-icon" />
    <span><slot /></span>
  </button>
</template>

<style scoped>
.button {
  @apply text-white px-4 text-xs border p-2 border-[var(--primary-button-color)] bg-white rounded-md text-[var(--primary-button-color)] hover:opacity-90 align-middle
 py-2 flex gap-2 justify-center items-center;
}

.button-icon {
  @apply w-4 h-4 text-[var(--primary-button-color)] align-middle;
}

:disabled {
  @apply pointer-events-none opacity-50;
}
</style>
