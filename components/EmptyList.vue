<script setup>
    const props = defineProps({
  bodyText: {
    type: String,
    required: true,
  },
});
</script>

<template>
   <div class="msg">{{ bodyText }}</div>
</template>
  

<style scoped>
.msg {
    @apply text-center my-20 text-[var(--secondary-text-color)];
  }
</style>