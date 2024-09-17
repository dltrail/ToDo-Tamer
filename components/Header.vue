<template>
  <header role="banner">
    <h1>Todo Tamer</h1>
    <p>Wrangle Your To-Do List Like a Pro!</p>
  </header>
</template>

<style scoped>
header {
  @apply fixed w-screen top-0 left-1/2 transform -translate-x-1/2 bg-white z-50 text-center;
}

h1 {
  @apply text-6xl my-6 text-[var(--accent-color-2)];
}

p {
  @apply text-base my-2 text-[var(--text-color)];
}
</style>
