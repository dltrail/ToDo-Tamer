<template>
  <Header />

  <main class="main">
    <div class="leftLayout">
      <NuxtImg
        class="tamerImg"
        src="/task-tamer.svg"
        alt="Task Tamer Graphic"
        loading="lazy"sd
      />
    </div>
    <div class="rightLayout">
      <TodoForm />
      <Nav />
      <slot />
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.main {
  @apply md:min-h-[calc(96vh-var(--header-height))] flex flex-col-reverse md:flex-row mt-[var(--header-height)] overflow-hidden;
}

.leftLayout {
  @apply md:w-1/2 sm:w-screen;
}

.rightLayout {
  @apply md:w-1/2 sm:w-screen text-center relative;
}

.rightLayoutHeader {
  @apply fixed w-screen text-center translate-x-[-50%] left-1/2 bg-white z-50;
}
</style>
