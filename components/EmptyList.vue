<template>
   <div class="message">
   <slot/>
   </div>
</template>
  

<style scoped>
.message {
    @apply text-center my-20 text-[var(--secondary-text-color)];
  }
</style>