<template>
  <UModal
    class="modal"
    :ui="{
      strategy: 'override',
      container: 'flex min-h-full items-center justify-center text-center',
    }"
  >
    <div class="modalInner">
      <p class="modalMsg">Are you sure you want to clear all your todo's</p>
      <div class="modalBtnGroup" size="sm" orientation="horizontal">
        <UButton class="cancelbutton" variant="outline"@click="$emit('toggleModal')"
          >Cancel</UButton
        >
        <UButton class="acceptbutton" @click="$emit('acceptModal')" variant="solid"
          >confirm</UButton
        >
      </div>
    </div>
  </UModal>
</template>

<style>
.modalInner {
    @apply flex flex-col justify-center text-center items-center
  
}
.modalMsg{
        @apply text-[var(--text-color)] mb-8
    }
    .modalBtnGroup{
        @apply flex gap-4

    }
    /* .cancelbutton{
        @apply bg-white text-[var(--primary-color)] hover:text-white  hover:bg-[var(--primary-color)]
    }
    .acceptbutton{
        @apply bg-[var(--primary-color)] text-white hover:text-white hover:bg-[var(--primary-color)]
    } */
</style>
