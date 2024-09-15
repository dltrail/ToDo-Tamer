<template>
  <UModal
    class="modal"
    :ui="{
      strategy: 'override',
      container: 'flex min-h-full items-center justify-center text-center',
      background: 'bg-red-200',
      text: 'bg-red-20',
    }"
  >
    <div class="modalInner">
      <p>Are you sure you want to clear all todo's</p>
      <UButtonGroup size="sm" orientation="horizontal">
        <UButton variant="outline" @click="$emit('toggleModal')"
          >Cancel</UButton
        >
        <UButton @click="$emit('acceptModal')" variant="solid"
          >I'm ready</UButton
        >
      </UButtonGroup>
    </div>
  </UModal>
</template>
