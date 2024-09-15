<template>
  <main>
    <div class="todoApp">
        ToDo App
    </div> 
    <TodoForm/>
    <Nav />
    <slot />
    <footer class="footer">
      <p>Designed and deved by <NuxtLink class="footerLink" to="https://github.com/dltrail">dtrail</NuxtLink></p>
    </footer>
  </main>
</template>

<style>
.footer {
  @apply absolute bottom-0 flex justify-center w-screen
}

.footerLink {
  @apply font-bold hover:underline underline-offset-2
}
</style>


