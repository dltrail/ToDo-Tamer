<template>
    <footer class="footer" role="contentinfo">
      <p>
        Designed and developed by
        <NuxtLink class="footerLink" to="https://github.com/dltrail" aria-label="Visit D Trail's GitHub profile">
          D Trail
        </NuxtLink>
      </p>
    </footer>
  </template>
  
  <style>
  .footer {
    @apply flex justify-center w-full text-black text-xs;
  }
  
  .footerLink {
    @apply font-bold hover:underline underline-offset-2;
  }
  </style>