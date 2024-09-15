<template>
  <footer class="footer">
    <p>
      Designed and Dev'ed by
      <NuxtLink class="footerLink" to="https://github.com/dltrail"
        >D Trail</NuxtLink
      >
    </p>
  </footer>
</template>

<style>
.footer {
  @apply absolute bottom-0 flex justify-center w-screen;
}

.footerLink {
  @apply font-bold hover:underline underline-offset-2;
}
</style>
