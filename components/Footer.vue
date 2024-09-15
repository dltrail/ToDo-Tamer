<template>
  <footer class="footer">
    <p>
      Designed and Dev'ed by
      <NuxtLink class="footerLink" to="https://github.com/dltrail"
        >D Trail</NuxtLink>
    </p>
  </footer>
</template>

<style>
.footer {
  @apply flex justify-center w-screen text-black text-xs;
}

.footerLink {
  @apply font-bold hover:underline underline-offset-2;
}
</style>
