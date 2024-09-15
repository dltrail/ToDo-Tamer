<template>
    <header>
    <h1>Task Master</h1>
    <p>Wrangle Your To-Do List Like a Pro!</p>
  </header>
</template>

<style>
header {
  @apply fixed w-screen text-center top-0 translate-x-[-50%] left-1/2 bg-white z-50
}
h1 {
  @apply text-6xl text-center my-6 text-[var(--primary-color)];
}

header p {
  @apply text-base text-center my-6 text-[var(--text-color)];
}
</style>