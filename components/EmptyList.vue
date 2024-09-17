<template>
   <div class="msg">
   <slot/>
   </div>
</template>
  

<style scoped>
.msg {
    @apply text-center my-20 text-[var(--secondary-text-color)];
  }
</style>