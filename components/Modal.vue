<template>
    <UModal
      class="modal"
      :ui="{
        strategy: 'override',
        container: 'flex min-h-full items-center justify-center text-center',
      }"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div class="modal__inner">
        <p id="modal-description" class="modal__message">
          Are you sure you want to clear all your todos?
        </p>
        <div class="modal__button-group" size="sm" orientation="horizontal">
          <button
            class="button--cancel"
            variant="outline"
            @click="$emit('toggleModal')"
            aria-label="Cancel"
          >
            Cancel
          </button>
          <button
            class="button--accept"
            @click="$emit('acceptModal')"
            variant="solid"
            aria-label="Confirm"
          >
            Confirm
          </button>
        </div>
      </div>
    </UModal>
  </template>
  

<style scoped>
.modal {
  @apply z-50
}
.modal__inner {
  @apply h-40 flex flex-col justify-center items-center text-center;
}

.modal__message {
  @apply text-[var(--text-color)] mb-8;
}

.modal__button-group {
  @apply flex gap-4;
}

.button--accept {
  @apply border p-2 bg-[var(--primary-button-color)] rounded-md text-white hover:opacity-50 text-sm;
}

.button--cancel {
  @apply border p-2 text-[var(--primary-button-color)] rounded-md bg-white hover:opacity-50 text-sm;
}
</style>
