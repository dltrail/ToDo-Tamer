<template>
    <button
      class="clearBtn"
      @click="$emit('handleToggleModalVisibility')"
      :class="completed.length === 0 ? 'disabled' : ''"
    >
      <UIcon
        name="i-heroicons-trash"
        class="w-4 h-4 text-[var(--primary-button-color)]"
      />
      Clear All
    </button>
</template>
  

<style scoped>

</style>
